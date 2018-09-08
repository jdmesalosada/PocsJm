import { Task, See } from "serenity-js/lib/screenplay";
import { Wait, Is, Text } from "serenity-js/lib/serenity-protractor";
import { LoginFail } from "../ui/login_fail";
import { include } from "../../assertions/assertions";

export const LoginWasUnsuccesful = () => Task.where('#actor should see an invalid credentials message',
    Wait.until(LoginFail.Invalid_Credentials_Message, Is.visible()),
    See.if(Text.of(LoginFail.Invalid_Credentials_Message), include('Please try again')) 
)

