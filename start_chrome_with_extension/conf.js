
const path = require('path');

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
        /*return (
         browser.get('chrome-extension://idgpnmonknjnojddfkpgkljpfnnfcklj/settings.tmpl.html'),
         browser.executeScript(`(
             "localStorage.setItem('profiles', JSON.stringify([{                " +
             "  title: 'Selenium', hideComment: true, appendMode: '',           " +
             "  headers: [                                                      " +
             "    {enabled: true, name: 'mi-ip', value: '127.0.0.1', comment: ''}, " +
             "  ],                                                              " +
             "  respHeaders: [],                                                " +
             "  filters: []                                                     " +
             "}]));                                                             ")`
         ));*/

        var doTheFuncyStuff = function () {
            angular
                .module('doTheFuncyStuff', [])
                .run([function () {
                    return (browser.get('chrome-extension://idgpnmonknjnojddfkpgkljpfnnfcklj/settings.tmpl.html'),
                        browser.executeScript(
                            (
                                "localStorage.setItem('profiles', JSON.stringify([{                " +
                                "  title: 'Selenium', hideComment: true, appendMode: '',           " +
                                "  headers: [                                                      " +
                                "    {enabled: true, name: 'X-New-Membership', value: 'true', comment: ''}, " +
                                "  ],                                                              " +
                                "  respHeaders: [],                                                " +
                                "  filters: []                                                     " +
                                "}]));                                                             ")
                        ))
                }]);
        };

    },
}