import { protractor } from 'protractor';
import { Actor, BrowseTheWeb, Cast } from 'serenity-js/lib/screenplay-protractor';

export class Actors implements Cast {
    actor(name: string): Actor {
        return Actor.named(name).whoCan(BrowseTheWeb.using(protractor.browser));
    }
}