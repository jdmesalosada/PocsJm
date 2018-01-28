package strategy.ducks.fly;

import strategy.ducks.interfaces.Fly.FlyBehavior;

public class FlyWithWings  implements FlyBehavior {

    public void fly() {
        System.out.println("I'm flying. FlyWithWings concrete class");
    }
}
