import { Open, PerformsTasks, ResizeBrowserWindow, step, Task, Wait, Duration, Is } from 'serenity-js/lib/screenplay-protractor';
import {LoginPage} from './../UI/loginPage';

const Default_Timeout = Duration.ofMillis(300),
          Not_Long_Enough = Duration.ofMillis(50),
          Long_Enough     = Duration.ofMillis(11000);

export class Start implements Task {

    static start() {
        return new Start();
    }

    @step('start entering the page')
    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            Open.browserOn('/perfil/'),
          //  ResizeBrowserWindow.toMaximum(),
            Wait.upTo(Duration.ofSeconds(20)).until(LoginPage.Login, Is.visible()),
        );
    }

    constructor() {}

}