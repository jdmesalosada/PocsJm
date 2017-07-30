
import {LoginServices} from '../page_objects/login/login_services';

describe('Login', () => {

  it('user should be able to log in', () => {
      let loginServices = new LoginServices();
      loginServices.get();
      loginServices.writeUsername("pepito.perez@gmail.com.co");
      loginServices.writePass("11111zzzi");

  });
});