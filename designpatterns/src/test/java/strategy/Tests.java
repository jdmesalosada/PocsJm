package strategy;

import org.junit.Test;
import strategy.concrete.ducks.MallarDuck;

public class Tests {
    @Test
    public void simulatorDuckTest1() {
        Duck mallard = new MallarDuck();
        mallard.performFly();
        mallard.performQuack();
    }
}
