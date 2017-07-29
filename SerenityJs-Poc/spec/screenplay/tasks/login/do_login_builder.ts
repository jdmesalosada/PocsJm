

import { Task, PerformsTasks } from "serenity-js/lib/screenplay";
import { DoLogin } from "./do_login_bui"

export class Login implements Task {

    static Username(userName) {
        return new Login([DoLogin.withUserName(userName)]);
    }

    performAs(actor: PerformsTasks): PromiseLike<void> {
        debugger
        return actor.attemptsTo(
            ...this.tasks,
        );
    }

    Pass(pass: string) {
        this.tasks.push(DoLogin.withPass(pass));
        return this;
    }

    // UserName(userName: string) {
    //     debugger
    //     DoLogin.withUserName(userName);
    //     return this;
    // }

    submit() {
        debugger
        this.tasks.push(DoLogin.submit());
        return this;
    }

    constructor(private tasks: Task[]) {

    }
}

