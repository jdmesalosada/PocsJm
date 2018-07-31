import { Task, PerformsTasks } from "serenity-js/lib/screenplay";
import { Open, UseAngular } from "serenity-js/lib/serenity-protractor";

export class Navigate implements Task {

    static toFaceboook(){
        return new Navigate();
    }

    performAs(actor: PerformsTasks) {
        return actor.attemptsTo(
            UseAngular.disableSynchronisation(),
            Open.browserOn('https://www.facebook.com')
        );
    }
}