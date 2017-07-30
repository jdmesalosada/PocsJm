import { browser, Config } from 'protractor';

export let config: Config = {

    //seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

    seleniumServerJar: '../node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.4.0.jar',

    specs: ['./tests/*.js'
    ],

    framework: 'jasmine',

    
    allScriptsTimeout: 60000,

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                // 'incognito',
                // 'disable-extensions',
            ]
        }
    },

    jasmineNodeOpts: {
        compiler:"ts:ts-node/register",
        showColors: true,
        defaultTimeoutInterval: 30000,
        isVerbose: true
    }
}