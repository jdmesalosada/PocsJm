import { PerformsTasks, Task } from 'serenity-js/lib/screenplay';
import { Select, step, Click, Wait, Is, Duration, Enter } from 'serenity-js/lib/screenplay-protractor';
import { LoginPage } from '../../UI/loginPage';
import { protractor, browser } from 'protractor';

export class EnterPass implements Task{

    constructor(private pass: string) { }

    static called(pass: string){
        return new EnterPass(pass);
    }

    performAs(actor: PerformsTasks) : PromiseLike<void> {

        return actor.attemptsTo(
            Enter.theValue(this.pass)
            .into(LoginPage.Password)
            .thenHit(protractor.Key.TAB),
        );
    }

}