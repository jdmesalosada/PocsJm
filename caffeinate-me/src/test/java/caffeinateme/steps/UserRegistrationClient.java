package caffeinateme.steps;

public class UserRegistrationClient {

    long customerIdCouter = 1;

    public void registerUser(Customer newCustomer) {
        newCustomer.hasACustomerIdOf(customerIdCouter++);

    }
}
