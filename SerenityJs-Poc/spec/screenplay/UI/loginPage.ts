import { by } from 'protractor';
import { Target } from 'serenity-js/lib/screenplay-protractor';

export class LoginPage {

    public static UserName = Target.the('User Name')
        .located(by.id('username'));

    public static Password = Target.the('Password')
        .located(by.id('password'));

    public static Login = Target.the("Login button")
        .located(by.id("login"));
}