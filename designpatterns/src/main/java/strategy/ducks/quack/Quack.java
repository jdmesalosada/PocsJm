package strategy.ducks.quack;

import strategy.ducks.interfaces.Quack.QuackBehavior;

public class Quack implements QuackBehavior {
    public void quack() {
        System.out.println("Performing Quack from concrete Quack.");
    }
}
