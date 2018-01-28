package strategy.ducks.ducks;

import strategy.ducks.Duck;
import strategy.ducks.fly.FlyWithWings;
import strategy.ducks.quack.Quack;

public class MallarDuck extends Duck {

    public MallarDuck() {
        setFlyBehavior(new FlyWithWings());
        setQuackBehavior(new Quack());
    }

    public void display() {
    }
}
