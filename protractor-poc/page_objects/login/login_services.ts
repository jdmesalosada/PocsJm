import { LoginUI } from './login_ui';
import { browser } from 'protractor';

const config = require ('config') 

export class LoginServices {

    private loginUI: LoginUI;

    constructor() {
        this.loginUI = new LoginUI();
    }

    get() {
        browser.waitForAngularEnabled(false);
        browser.get(config.get('environment.url'));
    }

    writePass(pass: string) {
        this.loginUI.PasswordTextbox.sendKeys(pass);
    }

    writeUsername(username: string) {
        this.loginUI.UserNameTexbox.sendKeys(username);
    }
}