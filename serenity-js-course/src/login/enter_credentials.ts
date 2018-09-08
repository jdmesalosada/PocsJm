import { Task, PerformsTasks } from "serenity-js/lib/screenplay";
import { Enter, Click } from "serenity-js/lib/serenity-protractor";
import { Login } from "./ui/login";
import { Pause } from "../serenity/interactions/Pause";
import { Refresh } from "../serenity/interactions/Refresh";

/*export class EnterPass implements Task {

    performAs(actor: PerformsTasks){
        return actor.attemptsTo(
            Enter.theValue(this.pass).into(Login.Pass_Field)
        )
    }

    constructor(private pass:string){}

}

export class EnterUsername implements Task {

    performAs(actor: PerformsTasks){
        return actor.attemptsTo(
            Enter.theValue(this.username).into(Login.Username_Field)
        )
    }

    constructor(private username:string){}

}

export class CLickSignIn implements Task {

    performAs(actor: PerformsTasks){
        return actor.attemptsTo(
            Click.on(Login.SignIn_Button)
        )
    }

    constructor(){}

}

export class EnterCredentials implements Task{

    static as(username: string, pass: string){
        return new EnterCredentials(username, pass);
    }

    performAs(actor:PerformsTasks){
        return actor.attemptsTo(
            new EnterUsername(this.username),
            new EnterPass(this.pass),
            new CLickSignIn()
        )
    }

    constructor(private username:string, private pass: string){}
}*/

export const EnterPass = (pass: string) => Task.where('#actor enters the pass',
    Enter.theValue(pass).into(Login.Pass_Field)
);


export const EnterUsername = (username: string) => Task.where('#actor enters the username',
    Enter.theValue(username).into(Login.Username_Field)
);

export const CLickSignIn = () => Task.where('#actor clicks on enter button',
    Click.on(Login.SignIn_Button)
);

export const EnterCredentials = (username: string, pass: string) => Task.where('#actor enters its credentials',
    EnterUsername(username),
    EnterPass(pass),
    CLickSignIn(),
);
