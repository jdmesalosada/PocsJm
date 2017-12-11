
import { by } from 'protractor';
import { Target } from 'serenity-js/lib/screenplay-protractor';

export class HomePage {

    public static LogOut = Target.the("Log out link")
        .located(by.css("a[title='Cerrar sesión']"));

}