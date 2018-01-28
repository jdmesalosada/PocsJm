package strategy.concrete.ducks;

import strategy.Duck;
import strategy.concrete.fly.FlyWithWings;
import strategy.concrete.quack.Quack;

public class MallarDuck extends Duck {

    public MallarDuck(){
        flyBehavior = new FlyWithWings();
        quackBehavior = new Quack();
    }
    public void display() {
    }
}
