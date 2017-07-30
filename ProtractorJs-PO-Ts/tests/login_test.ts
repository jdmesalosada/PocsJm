import { ElementFinder, browser, by, element } from 'protractor';
import {LoginServices} from '../page_objects/login/login_services';

describe('Login', () => {

  // beforeEach(function () {
  //     browser.get('https://app.skillhunt.io/');
  //  });

  it('user should be able to log in', () => {
      let loginServices = new LoginServices();
      loginServices.get();
      loginServices.writeUsername("automation@carnival.com");
      loginServices.writePass("11111");

  });
});