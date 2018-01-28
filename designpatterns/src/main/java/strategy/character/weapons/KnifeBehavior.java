package strategy.character.weapons;

import strategy.character.interfaces.WeaponBehavior;

public class KnifeBehavior implements WeaponBehavior {

    public void useWeapon() {
        System.out.println("I am using a Knife");
    }
}
