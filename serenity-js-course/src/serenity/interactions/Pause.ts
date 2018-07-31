import { Interaction } from '@serenity-js/core/lib/screenplay';
import { BrowseTheWeb } from 'serenity-js/lib/serenity-protractor';

export const Pause = {
  for: (time: number) => Interaction.where('#actor pause', actor => {
    const browse = BrowseTheWeb.as(actor);
    return browse.sleep(time);
  }),
};
