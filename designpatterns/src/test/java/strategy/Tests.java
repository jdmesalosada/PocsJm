package strategy;

import org.junit.Test;
import strategy.character.characters.King;
import strategy.character.weapons.KnifeBehavior;
import strategy.character.weapons.SwordBehavior;
import strategy.ducks.Duck;
import strategy.ducks.ducks.MallarDuck;
import strategy.ducks.ducks.ModelDuck;
import strategy.ducks.fly.FlyRocketPowered;

public class Tests {
    @Test
    public void simulatorDuckTest1() {
        Duck mallard = new MallarDuck();
        mallard.performFly();
        mallard.performQuack();

        ModelDuck modelDuck = new ModelDuck();
        modelDuck.performFly();

        //Change the behavior run time.
        modelDuck.setFlyBehavior(new FlyRocketPowered());
        modelDuck.performFly();
        modelDuck.display();
    }

    @Test
    public void characterTest() {
        King king = new King();
        king.setWeaponBehavior(new KnifeBehavior());
        king.useWeapon();

        king.setWeaponBehavior(new SwordBehavior());
        king.useWeapon();
    }
}
