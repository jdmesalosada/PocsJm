import { Interaction, UsesAbilities } from "../../../node_modules/serenity-js/lib/screenplay";
import { protractor } from "../../../node_modules/protractor/built/ptor";

export class Refresh implements Interaction{

    static Page(){
        return new Refresh();
    }

    performAs(actor: UsesAbilities){
        return protractor.browser.refresh();
    }
}