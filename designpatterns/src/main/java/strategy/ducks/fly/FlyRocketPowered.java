package strategy.ducks.fly;

import strategy.ducks.interfaces.Fly.FlyBehavior;

public class FlyRocketPowered implements FlyBehavior {

    public void fly() {
        System.out.println("I am flying with a rocket.");
    }
}
