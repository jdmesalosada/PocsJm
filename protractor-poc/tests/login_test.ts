
import {LoginServices} from '../page_objects/login/login_services';
import { browser} from 'protractor';
const config = require ('config') 

describe('Login', () => {

  it('user should be able to log in', () => {
      let loginServices = new LoginServices();
      loginServices.get();
      loginServices.writeUsername(config.get('login.userName'));
      loginServices.writePass(config.get('login.password'));
      browser.sleep(3000);

  });
});