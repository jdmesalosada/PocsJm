package strategy.ducks.quack;

import strategy.ducks.interfaces.Quack.QuackBehavior;

public class Squeak implements QuackBehavior {
    public void quack() {
        System.out.println("Squeak");
    }
}
