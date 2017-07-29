import { Question, Text } from 'serenity-js/lib/screenplay-protractor';
import { HomePage } from '../../UI/homePage';

export class HomeQuestions {

    static LogOutText: Question<PromiseLike<string>> = Text.of(HomePage.LogOut);

}