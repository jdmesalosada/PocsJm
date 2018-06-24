
const path = require('path');
const loadExtension = require('./loadExtension');
exports.config = {

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ["--load-extension=" + __dirname + "/mod_header"]
        }
    },

    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['test.js'],

    onPrepare: function () {
        return loadExtension();
    },
}