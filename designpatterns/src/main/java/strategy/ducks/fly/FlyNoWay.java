package strategy.ducks.fly;

import strategy.ducks.interfaces.Fly.FlyBehavior;

public class FlyNoWay implements FlyBehavior {
    public void fly() {
        System.out.println("I can't fly. FlyNoWay concrete class");
    }
}



