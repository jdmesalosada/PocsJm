package strategy.ducks.ducks;

import strategy.ducks.Duck;
import strategy.ducks.fly.FlyNoWay;
import strategy.ducks.quack.Quack;

public class ModelDuck extends Duck {

    public ModelDuck() {
        this.setFlyBehavior(new FlyNoWay());
        this.setQuackBehavior(new Quack());
    }

    public void display() {
        System.out.print("I am a model duck.");
    }
}
