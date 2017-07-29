
import { Start } from '../../spec/screenplay/tasks/start';
import { Actor } from 'serenity-js/lib/screenplay';
import { serenity } from 'serenity-js';
import { HomeQuestions } from "../../spec/screenplay/questions/home/homeQuestions";
import { expect } from '../../spec/screenplay/expect';
import { protractor, browser } from 'protractor';
import { HomePage } from "../../spec/screenplay/UI/homePage";
import { Wait, Duration, Is, Scroll, Click } from 'serenity-js/lib/screenplay-protractor';
import { Activity, Interaction } from '@serenity-js/core/lib/screenplay';
//import { DoLogin }  from '../../spec/screenplay/tasks/login/do_login';
import { DoLogin } from '../../spec/screenplay/tasks/login/do_login_bui';
import { Login } from '../../spec/screenplay/tasks/login/do_login_builder';
//type SuccessCondition<T> = (subject: T, timeout: Duration) => Activity;
import { LoginExecutor } from '../../spec/screenplay/tasks/login/builder/loginBuilder';

export = function loginSteps() {

  browser.waitForAngularEnabled(false);
  let self = this;

  this.Given(/^that (.*) opens the Login page$/, function (name: string) {
    return this.stage.theActorCalled(name).attemptsTo(
      Start.start()
    );

  });

  this.Given(/^he writes the username (.*)$/, function (username: string) {
    return this.stage.theActorInTheSpotlight().attemptsTo(
      // EnterUserName.called(username),
    )
  });

  this.Given(/^he writes the password (.*)$/, function (pass: string) {

    console.log("LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem\nLoremLorem");
    let tonces = "Aca vamos loco";
    browser.debugger();
    debugger;
    return this.stage.theActorInTheSpotlight().attemptsTo(
      // EnterPass.called(pass),
    )
  });

  this.When(/^he clicks the Log in button$/, function () {
    return this.stage.theActorInTheSpotlight().attemptsTo(
      // SubmitLoginForm.called(),
    )
  });


  this.Then(/^his must be redirected to the Home Page$/, function () {

    // let isClickeable = false;
    // let retries = 0;

    // while (!isClickeable && retries < 10) {

    //   this.stage.theActorInTheSpotlight().attemptsTo(
    //     Click.on(HomePage.noExistsLocator)
    //   ).then(() => {
    //   }).catch(() => {

    //   })
    // }

  });


  /*this.When(/^he login into the application with username "([^"]*)" and pass "([^"]*)"$/, function (username: string, pass: string) {
    return this.stage.theActorInTheSpotlight().attemptsTo(
      DoLogin.withCredentials(username, pass),
    )
  });*/

  /*this.When(/^he login into the application with username "([^"]*)" and pass "([^"]*)"$/, function (username: string, pass: string) {
      return this.stage.theActorInTheSpotlight().attemptsTo(
        DoLogin.withPass(pass),
        Wait.for(Duration.ofMillis(5000)),
        DoLogin.withUserName(username),
      )
    });*/

  /*this.When(/^he login into the application with username "([^"]*)" and pass "([^"]*)"$/, function (username: string, pass: string) {
      return this.stage.theActorInTheSpotlight().attemptsTo(
        DoLogin.withCredentials(username, pass),
        Wait.for(Duration.ofMillis(5000)),
      )
    });*/

  //Firs builder :(
  /*this.When(/^he login into the application with username "([^"]*)" and pass "([^"]*)"$/, function (username: string, pass: string) {
    debugger
    return this.stage.theActorInTheSpotlight().attemptsTo(
        Login
        .Username(username)
        .Pass(pass)
        .submit(),
    )
  });*/

  /*this.When(/^he login into the application with username "([^"]*)" and pass "([^"]*)"$/, function (username: string, pass: string) {
    debugger
    return this.stage.theActorInTheSpotlight().attemptsTo(
      LoginBuilder
        .withUsername(username)
        .withPass(pass)
        .Submit().build(),

    )
  });*/

  this.When(/^he login into the application with username "([^"]*)" and pass "([^"]*)"$/, function (username: string, pass: string) {
    debugger
    return this.stage.theActorInTheSpotlight().attemptsTo(
      LoginExecutor.Builder
        .withPass(pass)
        .build(),
    )
  });

  const promiseWhile = (data, condition, action) => {
    var whilst = (data) => {
      return condition(data) ?
        action(data).then(whilst) :
        Promise.resolve(data);
    }
    return whilst(data);
  };


}