package strategy.ducks.quack;

import strategy.ducks.interfaces.Quack.QuackBehavior;

public class MuteQuack implements QuackBehavior {

    public void quack() {
        System.out.println("<<Silence>>");
    }
}
