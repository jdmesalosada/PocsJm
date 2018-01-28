package strategy.concrete.fly;

import strategy.interfaces.FlyBehavior;

import javax.sound.midi.SysexMessage;

public class FlyWithWings  implements FlyBehavior {

    public void fly() {
        System.out.println("I'm flying. FlyWithWings concrete class");
    }
}
