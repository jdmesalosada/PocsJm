import { by } from 'protractor';
import { Target } from 'serenity-js/lib/screenplay-protractor';

export class LoginPage {

    public static UserName = Target.the('User Name')
        .located(by.xpath('//input[contains(@id,\'username_or_email\')]'));

    public static Password = Target.the('Password')
        .located(by.css('input[type=\'password\']'));

    public static Login = Target.the("Login button")
        .located(by.css("input[value=Login]"));
}