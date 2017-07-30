import { LoginUI } from './login_ui';
import { browser } from 'protractor';

export class LoginServices {

    private loginUI: LoginUI;

    constructor() {
        this.loginUI = new LoginUI();
    }

    get() {
        browser.waitForAngularEnabled(false);
        browser.get('http://www.facebook.com');
    }

    writePass(pass: string) {
        this.loginUI.PasswordTextbox.sendKeys(pass);
    }

    writeUsername(username: string) {
        this.loginUI.UserNameTexbox.sendKeys(username);
    }
}