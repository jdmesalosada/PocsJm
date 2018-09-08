import { Target } from "serenity-js/lib/serenity-protractor";
import { by } from "protractor";

export const LoginFail = {
    Invalid_Credentials_Message : Target.the('Invalid credentials message')
    .located(by.css('div[role="alert"]'))
}