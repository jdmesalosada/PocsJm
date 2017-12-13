import { Target, BrowseTheWeb } from "serenity-js/lib/serenity-protractor";
import { Interaction, Question, UsesAbilities } from "@serenity-js/core/lib/screenplay";

/*export const Element = {
    isDisplayed: (target: Target) => Interaction.where(`#actor chekc if ${target} is displayed or not`, actor => {
        const browse = BrowseTheWeb.as(actor);
        return browse.locate(target).isDisplayed().then(result => {
            if (result) {
                console.log('the element is displayed')
            } else {
                console.log('the element is not displayed.');
            }
            return result;
        });
    }),
};*/


/*export class VisibilityEl implements Question<string> {
    answeredBy(actor: UsesAbilities): string {
        throw new Error("Method not implemented.");
    }*/

/* public static of(target: Target): VisibilityEl {
     return new VisibilityEl(target);
 }

 answeredBy(actor: UsesAbilities): PromiseLike<boolean> {
     const browse = BrowseTheWeb.as(actor);
     return browse.locate(this.target).isDisplayed().then(function(result) {
         if (result) {
             console.log('the element is displayed');
         } else {
             console.log('the element is not displayed.');
         }
         return result as PromiseLike<boolean>;
     });
 }

 constructor(private target: Target) {
 }*/
//}


export const BoolVisibility = (target: Target) => Question.about('#actor get the href value', actor =>
    BrowseTheWeb.as(actor).locate(target).isDisplayed() as PromiseLike<boolean>
);
