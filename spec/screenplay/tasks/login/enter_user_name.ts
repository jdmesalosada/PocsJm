import {PerformsTasks, Task} from "serenity-js/lib/screenplay";
import {Enter} from "serenity-js/lib/screenplay-protractor";
import {LoginPage} from "../../UI/loginPage";
import {protractor} from "protractor";

export class EnterUserName implements Task {

    constructor(private username: string) {}

    static called(username: string) {
        return new EnterUserName(username);
    }

    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            Enter.theValue(this.username)
                .into(LoginPage.UserName)
                .thenHit(protractor.Key.TAB),
        );
    }
}