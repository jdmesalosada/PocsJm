
 
import { LoginBuilder } from './loginBuilder';

export class DoLogin {

     static with() : LoginBuilder {
        return new LoginBuilder();
    }
}