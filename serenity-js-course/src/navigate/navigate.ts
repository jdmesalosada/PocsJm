import { Task, PerformsTasks } from "../../node_modules/serenity-js/lib/screenplay";
import { Open, UseAngular } from "../../node_modules/serenity-js/lib/serenity-protractor";

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