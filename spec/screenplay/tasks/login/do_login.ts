
import { PerformsTasks, Task } from 'serenity-js/lib/screenplay';
import { Select, step, Click, Wait, Is, Duration, Enter } from 'serenity-js/lib/screenplay-protractor';
import { LoginPage } from '../../UI/loginPage';
import { protractor, browser } from 'protractor';
import { Question, Text } from 'serenity-js/lib/screenplay-protractor';
import { Interaction } from "@serenity-js/core/lib/screenplay";

export class DoLogin implements Task {

    constructor(private userName: string, private pass: string) { }

    static withCredentials(userName: string, pass: string) {
        return new DoLogin(userName, pass);
    }

    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            this.withUserName(this.userName),
            this.withPass(this.pass),
            this.submit(),
        );
    }

    withPass(pass: string): Task {
        return Enter.theValue(pass)
            .into(LoginPage.Password)
            .thenHit(protractor.Key.TAB);
    }

    withUserName(username: string): Task {
        return Enter.theValue(username)
            .into(LoginPage.UserName)
            .thenHit(protractor.Key.TAB);
    }

    submit() : Interaction{
         return Click.on(LoginPage.Login);
    }
}