import { PerformsTasks, Task } from 'serenity-js/lib/screenplay';
import { Select, step, Click, Wait, Is, Duration, Enter } from 'serenity-js/lib/screenplay-protractor';
import { LoginPage } from '../../UI/loginPage';
import { protractor } from 'protractor';


export class SubmitLoginForm implements Task {

    constructor() { }

    static called() {
        return new SubmitLoginForm();
    }

    performAs(actor: PerformsTasks): PromiseLike<void> {

        return actor.attemptsTo(
            Click.on(LoginPage.Login),
        );
    }
}