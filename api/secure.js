

class Secure {
	constructor() {
		this.execFunction = null;
	}

	addAppEvent(options) {
		return this.execFunction('secure.addAppEvent', options);
	}

	checkToken(options) {
		return this.execFunction('secure.checkToken', options);
	}

	getAppBalance(options) {
		return this.execFunction('secure.getAppBalance', options);
	}

	getSMSHistory(options) {
		return this.execFunction('secure.getSMSHistory', options);
	}

	getTransactionsHistory(options) {
		return this.execFunction('secure.getTransactionsHistory', options);
	}

	getUserLevel(options) {
		return this.execFunction('secure.getUserLevel', options);
	}

	sendNotification(options) {
		return this.execFunction('secure.sendNotification', options);
	}

	sendSMSNotification(options) {
		return this.execFunction('secure.sendSMSNotification', options);
	}

	setCounter(options) {
		return this.execFunction('secure.setCounter', options);
	}

	setUserLevel(options) {
		return this.execFunction('secure.setUserLevel', options);
	}
}

module.exports = Secure;

