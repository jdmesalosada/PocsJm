"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class LoginUI {
    constructor() {
        this.UserNameTexbox = protractor_1.$("input#email");
        this.PasswordTextbox = protractor_1.$("input#pass");
    }
}
exports.LoginUI = LoginUI;
