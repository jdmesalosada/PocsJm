package caffeinateme;

import caffeinateme.steps.Barista;
import caffeinateme.steps.Customer;
import caffeinateme.steps.UserRegistrationClient;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.serenitybdd.core.steps.ScenarioActor;
import net.thucydides.core.annotations.Steps;

import java.util.List;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;

public class OrderACoffeeStepDefinitions extends ScenarioActor {

    @Steps
    Customer cathy;

    @Steps
    Barista barry;

    @Steps
    UserRegistrationClient userRegistrations;

    OrderReceipt orderReceipt;

    @Given("^Cathy has a Caffeinate-Me account$")
    public void userHasACaffeinateMeAccount() throws Exception {
        userRegistrations.registerUser(cathy);
    }

    @When("^s?he orders a (.*)$")
    public void sheOrdersA(String order) throws Exception {
        orderReceipt = cathy.placesAnOrderFor(1, order);
    }

    @Then("^Barry should receive the order$")
    public void barryShouldReceiveTheOrder() throws Exception {
        assertThat(barry.pendingOrders()).contains(Order.matching(orderReceipt));
    }

    @Given("^Sarah has ordered:$")
    public void sheOrdersA(List<Map<String, String>> orders) throws Exception {
        System.out.print(orders);
    }

}
