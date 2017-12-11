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
            new ClickOn()
        );
    }
}

class EnterUsername implements Task {

    constructor(private username: string) { }

    static value(username: string) {
        return new EnterUsername(username);
    }

    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            Wait.until(LoginPage.UserName, Is.visible()),
            Enter.theValue(this.username)
                .into(LoginPage.UserName)
                .thenHit(protractor.Key.TAB));
    };
}

class EnterPass implements Task {

    constructor(private pass: string) { }

    // tslint:disable-next-line:typedef
    static value(pass: string) {
        return new EnterPass(pass);
    }

    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            Wait.until(LoginPage.Password, Is.visible()),
            Enter.theValue(this.pass)
                .into(LoginPage.Password)
                .thenHit(protractor.Key.TAB),
        );
    }
}

class ClickOn implements Task {

    static submit() {
        return new ClickOn();
    }

    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            Wait.until(LoginPage.Login, Is.visible()),
            Click.on(LoginPage.Login)
        );
    };
}