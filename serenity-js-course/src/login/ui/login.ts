import { Target } from "serenity-js/lib/serenity-protractor";
import { by } from "protractor";

export const Login = {
    Username_Field: Target.the('"Username field"').located(by.id('email')),
    Pass_Field: Target.the('"Pass field"').located(by.id('pass')),
    SignIn_Button: Target.the('"SignIn button"').located(by.css('input[type="submit"]'))
}