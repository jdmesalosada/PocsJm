package strategy.concrete.fly;

import strategy.interfaces.FlyBehavior;

public class FlyNoWay implements FlyBehavior {
    public void fly() {
        System.out.println("I can't fly. FlyNoWay concrete class");
    }
}



