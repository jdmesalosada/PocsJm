
import { by } from 'protractor';
import { Target } from 'serenity-js/lib/screenplay-protractor';

export class HomePage{

    /*public static LogOut = Target.the("Log out link")
        .located(by.xpath("//a[contains(text(),'Logout')]"));*/

        public static LogOut = Target.the("Log out link")
        .located(by.xpath("//a[contains(text(),'Pepito')]"));

        public static Body = Target.the("Body")
        .located(by.tagName("body"));

        public static termsAndConditions = Target.the("tonecs")
        .located(by.xpath("//a[contains(., 'View terms and conditions')]"));
}