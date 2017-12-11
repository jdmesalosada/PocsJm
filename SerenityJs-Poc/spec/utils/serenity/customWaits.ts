import { Target, BrowseTheWeb } from "serenity-js/lib/serenity-protractor";
import { Interaction } from "@serenity-js/core/lib/screenplay";

export const Element = {
    isDisplayed: (target: Target) => Interaction.where(`#actor hovers over ${target}`, actor => {
        const browse = BrowseTheWeb.as(actor);
        return browse.wait(target)

        });
    }),
};