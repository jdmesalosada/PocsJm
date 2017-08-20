"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login_services_1 = require("../page_objects/login/login_services");
const protractor_1 = require("protractor");
const config = require('config');
describe('Login', () => {
    it('user should be able to log in', () => {
        let loginServices = new login_services_1.LoginServices();
        loginServices.get();
        /*loginServices.writeUsername("pepito.perez@gmail.com.co");
        loginServices.writePass("11111zzzi");*/
        loginServices.writeUsername(config.get('login.userName'));
        loginServices.writePass(config.get('login.password'));
        protractor_1.browser.sleep(3000);
    });
});
