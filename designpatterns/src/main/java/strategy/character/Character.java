package strategy.character;

import strategy.character.interfaces.WeaponBehavior;

public abstract class Character {

    private WeaponBehavior weaponBehavior;

    public void setWeaponBehavior(WeaponBehavior wp){
        this.weaponBehavior = wp;
    }

    public void useWeapon(){
        this.weaponBehavior.useWeapon();
    }
}
