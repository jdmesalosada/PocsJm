import { PerformsTasks, Task } from 'serenity-js/lib/screenplay';
import { Select, step, Click, Wait, Is, Duration, Enter } from 'serenity-js/lib/screenplay-protractor';
import { LoginPage } from '../../../UI/loginPage';
import { protractor, browser } from 'protractor';
import { Question, Text } from 'serenity-js/lib/screenplay-protractor';
import { Interaction } from "@serenity-js/core/lib/screenplay";
import { DoLogin } from "../do_login_bui"



export class LoginExecutor implements Task {

    performAs(actor: PerformsTasks): PromiseLike<void> {
        debugger;
        return actor.attemptsTo(
            ...this.tasks
        );
    }

    private constructor(private tasks: Task[]) { }


    static Builder = class   {

    private pass: string;
    private userName: string;
    private static tasks : Task[] = new Array<Task>();

    private constructor() {
        
     }

    static withUsername(userName) {
        debugger
        this.tasks.push(DoLogin.withUserName(userName));
        return this;
    }

    static withPass(pass: string)    {
        this.tasks.push(DoLogin.withPass(pass));
        return this;
    }
    
    static Submit()    {
        this.tasks.push(DoLogin.submit());
        return this;
    }

    static build(): LoginExecutor {
        return new LoginExecutor(LoginExecutor.Builder.tasks);
    }
}
}