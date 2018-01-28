package strategy.ducks;

import strategy.ducks.interfaces.Fly.FlyBehavior;
import strategy.ducks.interfaces.Quack.QuackBehavior;

public abstract class Duck {

    private FlyBehavior flyBehavior;
    private QuackBehavior quackBehavior;

    public Duck() {
    }

    public abstract void display();

    public void setFlyBehavior(FlyBehavior fb){
        this.flyBehavior = fb;
    }

    public void setQuackBehavior(QuackBehavior qb){
        this.quackBehavior = qb;
    }

    public void performQuack() {
        this.quackBehavior.quack();
    }

    public void performFly() {
        this.flyBehavior.fly();
    }

    public void swim() {
        System.out.println("All ducks float, even decoys!");
    }
}
