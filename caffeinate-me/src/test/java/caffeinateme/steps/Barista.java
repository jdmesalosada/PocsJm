package caffeinateme.steps;

import caffeinateme.Order;
import net.thucydides.core.annotations.Steps;

import java.util.List;

public class Barista {

    @Steps(shared = true)
    CoffeeOrdersClient coffeeOrders;

    public List<Order> pendingOrders() {
        return coffeeOrders.getOrders();
    }
}
