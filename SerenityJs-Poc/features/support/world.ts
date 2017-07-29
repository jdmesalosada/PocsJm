import { serenity } from 'serenity-js';

import { Actors } from '../../spec/screenplay/actors';

export = function() {

    this.setDefaultTimeout(80 * 1000);

    this.World = function() {
        this.stage = serenity.callToStageFor(new Actors());
    };
};