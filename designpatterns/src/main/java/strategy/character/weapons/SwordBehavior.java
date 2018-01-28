package strategy.character.weapons;

import strategy.character.interfaces.WeaponBehavior;

public class SwordBehavior implements WeaponBehavior{

    public void useWeapon() {
        System.out.println("I am using a Sword!!");
    }
}
