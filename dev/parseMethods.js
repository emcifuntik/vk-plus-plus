const request = require('request');
const html = require('fast-html-parser');
const fs = require('fs');

const apiRegex = /cur\.sections \= \{(.+)}};/;

const API = {};

async function parse() {
  request({
    url: 'https://vk.com/dev/',
    gzip: true
  }, (err, res, body) => {
    if(err)
      return console.error(err);

    const doc = html.parse(body);
    let match = apiRegex.exec(body);
    let jsonData = '{' + match[1] + '}}';
    let apiData = JSON.parse(jsonData);

    const names = {};

    for(a in apiData) {
      names[a] = apiData[a].name;
      if(!(a in API))
        API[a] = [];
      
      for(let m in apiData[a].list)
        API[a].push(apiData[a].list[m][0]);
    }

    try {
      fs.mkdirSync('./api');
    }
    catch(err) {}
    
    let apiHeaderText = '';
    let apiBodyText = '';
    let apiInitFunction = 'init(executor) {\n';
    for(let objectName in API) {
      let methods = API[objectName];
      let className = names[objectName];

      let fileText = '\n\nclass ' + className + ' {\n\tconstructor() {\n\t\tthis.execFunction = null;\n\t}\n';

      for(let m in API[objectName]) {
        let methodName = API[objectName][m];
        let methodNameFull = methodName;
        let methodNameParts = methodName.split('.');
        if(methodNameParts.length > 1)
          methodName = methodNameParts[1];

        fileText += '\n\t' + methodName + '(options) {\n\t\treturn this.execFunction(\'' + methodNameFull + '\', options);\n\t}\n';
      }

      fileText += '}\n\nmodule.exports = ' + className + ';\n\n';
      fs.writeFileSync('./api/' + objectName + '.js', fileText);

      apiHeaderText += 'const ' + className + ' = require(\'./' + objectName + '.js\');\n';
      apiBodyText += '\t\tthis.' + objectName + ' = new ' + className + '();\n';
      apiInitFunction += '\t\tthis.' + objectName + '.execFunction = executor;\n';
    }
    apiInitFunction += '\t}\n';
    apiHeaderText += '\nclass API {\n\tconstructor() {\n' + apiBodyText + '\t}\n\n\t' + apiInitFunction + '}\n\nmodule.exports = API;\n';
    
    fs.writeFileSync('./api/index.js', apiHeaderText);

    //fs.writeFileSync('./api.json', JSON.stringify(apiData, null, 4));
  });
}

parse();