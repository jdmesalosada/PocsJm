
import { Start } from '../../spec/screenplay/tasks/start';
import { Actor } from 'serenity-js/lib/screenplay';
import { serenity } from 'serenity-js';
import { HomeQuestions } from "../../spec/screenplay/questions/home/homeQuestions";
import { expect } from '../../spec/screenplay/expect';
import { protractor, browser } from 'protractor';
import { HomePage } from "../../spec/screenplay/UI/homePage";
import { Wait, Duration, Is, Scroll, Click } from 'serenity-js/lib/screenplay-protractor';
import { Activity, Interaction } from '@serenity-js/core/lib/screenplay';
import { DoLogin } from '../../spec/screenplay/tasks/login/do_login_bui';

export = function loginSteps() {

  browser.waitForAngularEnabled(false);

  this.Given(/^that (.*) opens the Login page$/, function (name: string) {
    return this.stage.theActorCalled(name).attemptsTo(
      Start.start()
    );
  });


  this.When(/^he login into the application$/, function () {
    return this.stage.theActorInTheSpotlight().attemptsTo(
      DoLogin.withCredentials("user", "pass")
    );
  });

  this.Then(/^he must be redirected to the Home Page$/, function () {
    return this.stage.theActorInTheSpotlight().attemptsTo(
      Wait.upTo(Duration.ofSeconds(60)).until(HomePage.LogOut, Is.visible())
    );
  });
};
