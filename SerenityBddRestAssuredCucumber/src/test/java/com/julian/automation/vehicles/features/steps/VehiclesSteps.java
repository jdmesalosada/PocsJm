package com.julian.automation.vehicles.features.steps;

import static net.serenitybdd.rest.SerenityRest.then;
import static net.serenitybdd.rest.SerenityRest.with;
import static net.serenitybdd.rest.SerenityRest.given;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


import static org.hamcrest.Matchers.containsString;
import static net.serenitybdd.rest.SerenityRest.then;
import static net.serenitybdd.rest.SerenityRest.when;


public class VehiclesSteps {


    @Given("^Juan wants to purchase a vehicle$")
    public void juan_wants_to_purchase_a_vehicle() throws Throwable {
        given()
                .contentType("application/json");

    }

    @When("^he looks the available vehicles$")
    public void he_looks_the_available_vehicles() throws Throwable {
        when().get("http://localhost:3000/vehiculos");
    }

    @When("^he looks the available vehicles by Id$")
    public void he_looks_the_available_vehicles_by_Id() throws Throwable {
        when().get("http://localhost:3000/vehiculos/1");
    }

    @Then("^he must see which vehicles are available$")
    public void he_must_see_which_vehicles_are_available() throws Throwable {
        then().statusCode(200)
                .body(containsString("audi"));
    }

    @Then("^he must see the vehicle that match with that Id$")
    public void he_must_see_the_vehicle_that_match_with_that_Id() throws Throwable {
        then().statusCode(200)
                .body(containsString("ayw67p"));
    }
}
