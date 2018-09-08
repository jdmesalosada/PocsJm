import { Navigate } from "../../src/navigate/navigate";
import { EnterCredentials } from "../../src/login/enter_credentials";
import { LoginWasUnsuccesful } from "../../src/login/questions/login_was";

export = function loginSteps() {

    this.Given(/^that James opens the Login page$/, function () {
        return this.stage.theActorCalled('James').attemptsTo(
            Navigate.toFaceboook()
        )

    });

    this.When(/^he enters a wrong credentials$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
        EnterCredentials("james", "123456")
        )
    });

    this.Then(/^he should be warned about the invalid credentials$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            LoginWasUnsuccesful()
        )
    });

}