import { LoginPage } from '../../UI/loginPage';
import {
    Select, Click, Wait, Is, Duration, Enter, PerformsTasks, See, step, Task
} from 'serenity-js/lib/screenplay-protractor';
import { protractor, browser } from 'protractor';

export class DoLogin {

    static withPass = (pass: string): Task => new EnterPass(pass);
    static withUserName = (username: string): Task => new EnterUsername(username);
    static withCredentials = (username: string, pass: string): Task => new EnterCredentials(username, pass);
    static submit = () => new ClickOn();
    static mock = () => new Mock();
}

class EnterCredentials implements Task {

    constructor(private username: string, private pass: string) { }

    withCredentials(username: string, pass: string) {
        return new EnterCredentials(username, pass);
    }

    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            EnterUsername.value(this.username),
            EnterPass.value(this.pass),
        )
    }
}

class EnterUsername implements Task {

    constructor(private username: string) { }

    static value(username: string) {
        return new EnterUsername(username);
    }

    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(Enter.theValue(this.username)
            .into(LoginPage.UserName)
            .thenHit(protractor.Key.TAB),
            Wait.for(Duration.ofMillis(6000)));
    }
}

class EnterPass implements Task {

    constructor(private pass: string) { }

    static value(pass: string) {
        return new EnterPass(pass);
    }

    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(Enter.theValue(this.pass)
            .into(LoginPage.Password)
            .thenHit(protractor.Key.TAB),
            Wait.for(Duration.ofMillis(6000))
        );
    }
}

class ClickOn implements Task {

    static submit() {
        return new ClickOn();
    }

    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(Click.on(
            LoginPage.Login)
        )
    }
}

class Mock implements Task {

    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
        );
    }
}