
import { Start } from '../../spec/screenplay/tasks/start';
import { Actor } from 'serenity-js/lib/screenplay';
import { serenity } from 'serenity-js';
import { EnterPass } from "../../spec/screenplay/tasks/login/enter_pass";
import { EnterUserName } from "../../spec/screenplay/tasks/login/enter_user_name";
import { SubmitLoginForm } from "../../spec/screenplay/tasks/login/submit_login_form";
import { HomeQuestions } from "../../spec/screenplay/questions/home/homeQuestions";
import { expect } from '../../spec/screenplay/expect';
import { protractor, browser } from 'protractor';
import { HomePage } from "../../spec/screenplay/UI/homePage";
import { Wait, Duration, Is, Scroll } from 'serenity-js/lib/screenplay-protractor';
import { Activity, Interaction } from '@serenity-js/core/lib/screenplay';

type SuccessCondition<T> = (subject: T, timeout: Duration) => Activity;

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
      EnterUserName.called(username),
    )
  });

  this.Given(/^he writes the password (.*)$/, function (pass: string) {

    console.log("LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem\nLoremLorem");
    let tonces = "Aca vamos loco";
    browser.debugger();
    debugger;
    return this.stage.theActorInTheSpotlight().attemptsTo(
      EnterPass.called(pass),
    )
  });

  this.When(/^he clicks the Log in button$/, function () {
    return this.stage.theActorInTheSpotlight().attemptsTo(
      SubmitLoginForm.called(),
    )
  });

  this.Then(/^his must be redirected to the Home Page$/, function () {

    let self2 = this;
let iterator = true; 
while(iterator) {

    return self.resultCondition(self2, Is.clickable())
      .then((data) => { 
        debugger
      })
      .catch((error) => {
       self.resultAction(self2, Scroll.to(HomePage.termsAndConditions), 5)
       .then((data2) => {
          debugger
          iterator = false;
           expect(self.stage.theActorInTheSpotlight()
            .toSee(HomeQuestions.LogOutText)).eventually.deep.equal("Logout")
        })
        .catch((error2) => {

          
          debugger
          //debugger

        })



      });
      
}



    //      expect(self2.stage.theActorInTheSpotlight()
    //        .toSee(HomeQuestions.LogOutText)).eventually.deep.equal("Logout")

  });




  self.resultAction = function (context, action) {
    return new Promise((resolved, rejected) => {
      context.stage.theActorInTheSpotlight().attemptsTo(
        action,
      )
      .catch((dataError) => {
        rejected(dataError)
      })
      .then((data) => {
        resolved(data)
       });
    })
  }


  self.iterator = undefined;

  self.resultCondition = function (context, condition) {

    return new Promise((resolved, rejected) => {
      context.stage.theActorInTheSpotlight().attemptsTo(
        Wait.upTo(Duration.ofSeconds(10)).until(HomePage.LogOut, condition),
      )
      .catch((dataError) => {
        rejected(dataError)
      })
      .then((data) => {
        resolved(data)
       });
    })
  }
}