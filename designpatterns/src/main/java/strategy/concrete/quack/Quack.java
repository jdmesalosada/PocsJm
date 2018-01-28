package strategy.concrete.quack;

import strategy.interfaces.QuackBehavior;

public class Quack implements QuackBehavior {
    public void quack() {
        System.out.println("Performing Quack from concrete Quack.");
    }
}
