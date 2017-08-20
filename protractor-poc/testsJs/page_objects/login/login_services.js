"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login_ui_1 = require("./login_ui");
const protractor_1 = require("protractor");
const config = require('config');
class LoginServices {
    constructor() {
        this.loginUI = new login_ui_1.LoginUI();
    }
    get() {
        protractor_1.browser.waitForAngularEnabled(false);
        //browser.get('http://www.facebook.com');
        protractor_1.browser.get(config.get('environment.url'));
    }
    writePass(pass) {
        this.loginUI.PasswordTextbox.sendKeys(pass);
    }
    writeUsername(username) {
        this.loginUI.UserNameTexbox.sendKeys(username);
    }
}
exports.LoginServices = LoginServices;
