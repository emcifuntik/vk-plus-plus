/**
 * @module vk-plus-plus
 * @author Eugene Pogrebnyak (tuxick)
 * @version 1.0.0
 */

const request = require('request');
const API = require('./api/index.js');
const {
  EventEmitter
} = require('events');

class VK extends API {
  /**
   * @param {Object} options
   * @param {string} options.token
   * @param {string} [version]
   * @param {boolean} [options.useExecute]
   * @description Creates VK API accessor
   */
  constructor(options) {
    super();
    this._token = options.token;
    this._useExecute = options.useExecute === true;
    this._executor = this._useExecute ? this.executeMethod.bind(this) : this.pureAPICall.bind(this);
    this._version = options.version || '5.80';

    this._groupID = null;
    this._lpActive = false;
    this._lpKey = null;
    this._lpServer = null;
    this._lpTs = null;
    this._currentLpRequest = null;

    this.init(this._executor);

    if (this._useExecute) {
      this._callsCount = 25;
      this._nextCallsCount = 0;
      this._callQueue = [];
      this._waitTime = 200;
      this._currentTimeout = null;
      this._lastExecuteCode = null;
      this._executing = false;
      this.execute.execFunction = this.executeRequest.bind(this);
    }

    this.group = new EventEmitter();
  }

  executeMethod(method, options, filters = '') {
    return new Promise((resolve, reject) => {
      this._callQueue.push({
        method,
        options: options ? options : {},
        filters,
        resolve,
        reject
      });
      if (!this._executing) {
        process.nextTick(this.executeLoop.bind(this));
      }
    });
  }

  continueExecution() {
    if (this._callQueue.length) {
      this._currentTimeout = setTimeout(this.executeLoop.bind(this), this._waitTime);
    } else {
      this._executing = false;
    }
  }

  executeLoop() {
    if (this._callQueue.length) {
      this._executing = true;
      const currentMaxCalls = this._nextCallsCount != 0 ? this._nextCallsCount : this._callsCount;
      const count = (this._callQueue.length > currentMaxCalls) ? currentMaxCalls : this._callQueue.length;
      const apiCalls = [];
      const currentCalls = this._callQueue.splice(0, count);
      for (let i in currentCalls) {
        apiCalls.push(
          'API.' +
          currentCalls[i].method +
          '(' + JSON.stringify(currentCalls[i].options) + ')' +
          currentCalls[i].filters
        );
      }
      this._lastExecuteCode = 'return [' + apiCalls.join(',') + '];';
      this.execute.execute({
          code: this._lastExecuteCode
        })
        .then(this.executeHandler.bind(this, currentCalls))
        .catch(this.executeFail.bind(this, currentCalls));
      this.continueExecution();
    } else {
      this.continueExecution();
    }
  }

  executeHandler(apiCalls, result) {
    const res = result.res;
    const body = result.body;

    if (res.statusCode === 200) {
      if (this._nextCallsCount != 0)
        this._nextCallsCount = 0;

      if ('response' in body) {
        let err_nr = 0;
        for (let i in body.response) {
          if (body.response[i] === false)
            apiCalls[i].reject(body.execute_errors[err_nr++]);
          else
            apiCalls[i].resolve(body.response[i]);
        }
      } else if ('error' in body) {
        if (body.error.error_code == 6) {
          for (let i in apiCalls)
            this._callQueue.unshift(apiCalls[i]);
          console.error(body.error);
        } else if (body.error.error_code == 13) {
          console.error(this._lastExecuteCode);
          console.error(body);
        } else {
          console.error(this._lastExecuteCode);
          console.error(body);
        }
      }
    } else if (res.statusCode === 413) {
      if (this._nextCallsCount === 0) {
        this._nextCallsCount = Math.floor(this._callsCount / 2);
      } else {
        this._nextCallsCount = Math.floor(this._nextCallsCount / 2);
      }
      for (let i in apiCalls)
        this._callQueue.unshift(apiCalls[i]);
    } else {
      console.error(res.statusCode + ' | ' + res.statusMessage);
      for (let i in apiCalls)
        this._callQueue.unshift(apiCalls[i]);
    }
    this.continueExecution();
  }

  executeFail(apiCalls, err) {
    console.error(err);
    this.continueExecution();
  }

  executeRequest(method, options) {
    return new Promise((resolve, reject) => {
      request({
        url: 'https://api.vk.com/method/' + method,
        timeout: 180e3,
        method: 'POST',
        qs: {
          access_token: this._token,
          v: this._version
        },
        form: options,
        json: true
      }, (err, res, body) => {
        if (err)
          return reject(err);
        return resolve({
          res,
          body
        });
      })
    });
  }

  pureAPICall(method, options) {
    return new Promise((resolve, reject) => {
      request({
        url: 'https://api.vk.com/method/' + method,
        timeout: 60e3,
        method: 'POST',
        qs: {
          access_token: this._token,
          v: this._version
        },
        form: options,
        json: true
      }, (err, res, body) => {
        if (err)
          return reject(err);
        return resolve(body.response);
      })
    });
  }

  listenerLoop() {
    this._currentLpRequest = request({
      url: this._lpServer,
      timeout: 60e3,
      json: true,
      qs: {
        ts: this._lpTs,
        key: this._lpKey,
        act: 'a_check',
        wait: 25
      }
    }, (err, res, body) => {
      this._currentLpRequest = null;
      if (err)
        return this.listenerFail.bind(this)(err);
      return this.listenerHandler.bind(this)({
        res,
        body
      });
    });
  }

  listenerHandler(data) {
    const res = data.res;
    const body = data.body;
    if (res.statusCode == 200) {
      if ('failed' in body) {
        switch (parseInt(body.failed)) {
          case 1:
            this._lpTs = body.ts;
            this.continueListening();
            break;
          case 2:
          case 3:
            this._lpActive = false;
            this.startBot();
            break;
          default:
            console.error(body);
            break;
        }
        return;
      }

      this._lpTs = body.ts;
      if('updates' in body) {
        for (let update of body.updates) {
          this.group.emit(update.type, update.object);
        }
      }
    }
    this.continueListening();
  }

  listenerFail(err) {
    console.error(err);
    this.continueListening();
  }

  continueListening() {
    if (this._lpActive === true)
      process.nextTick(this.listenerLoop.bind(this));
  }

  startBot() {
    if(this._groupID == null) {
      this.groups.getById().then((info) => {
        this._groupID = info[0].id;
        this.groups.getLongPollServer({
          group_id: this._groupID
        }).then((lpServer) => {
          this._lpKey = lpServer.key;
          this._lpServer = lpServer.server;
          this._lpTs = lpServer.ts;
          this._lpActive = true;
          process.nextTick(this.listenerLoop.bind(this));
        }).catch(console.error);
      }).catch(console.error);
    }
    else {
      this.groups.getLongPollServer({
        group_id: this._groupID
      }).then((lpServer) => {
        this._lpKey = lpServer.key;
        this._lpServer = lpServer.server;
        this._lpTs = lpServer.ts;
        this._lpActive = true;
        process.nextTick(this.listenerLoop.bind(this));
      }).catch(console.error);
    }
  }

  stopBot() {
    if (this._currentLpRequest != null) {
      this._currentLpRequest.abort();
    }
    this._lpActive = false;
  }

  on(event, listener) {
    return this.group.on(event, listener);
  }
}

module.exports = VK;
