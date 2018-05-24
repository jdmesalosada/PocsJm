const lib = require("../lib");
const db = require("../db");
const mail = require("../mail");

//test es una función que viene con jest. La funcion test la podemos reemplazar por it
//el primer argumento es el nombre del test.
//el segundo argumento es una funcion donde implementamos nuestro test
//En jasmine tenemos la función describe para agrupar un conjunto de funciones
//relacionadas.
describe("absoulte", () => {
  it("should return a positive number if input is positive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it("should return a positive number if input is negative", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it("should return 0 if input is 0", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe("greet", () => {
  it("should return the greeting message", () => {
    const result = lib.greet("Juli");
    expect(result).toMatch(/Juli/);
    expect(result).toContain("Juli");
  });
});

describe("getCurrencies", () => {
  it("should return supported currencies", () => {
    const result = lib.getCurrencies();

    //Too general -> no nos agrega mucho valor.
    //por ejemplo si modificaramos la funcion y devolvieramos 1 el test seguiri pasando
    //au cuando hemos ingresado un bug.
    /*expect(result).toBeDefined();
        expect(result).not.toBeNull();*/

    //Too specific -> EL problema con este enfoque es que estamos probando
    //exactamente el orden en que vienen los elementos
    // y puede que esto no genere valor.
    /*expect(result[0].toBe('USD'));
        expect(result[1].toBe('AUD'));
        expect(result[1].toBe('EUR'));
        expect(result.length).toBe(3);*/

    //Proper way
    //Aca no se valida el orden solo que las monedas soportadas esten.
    expect(result).toEqual(expect.arrayContaining(["EUR", "USD", "AUD"]));
  });
});

describe("getProduct", () => {
  it("should return the product with the given id", () => {
    const result = lib.getProduct(1);
    expect(result).toEqual({ id: 1, price: 10 });
    expect(result).toMatchObject({ id: 1, price: 10 });
    expect(result).toHaveProperty("id", 1);
  });
});

describe("registerUser", () => {
  it("should throw if username is falsy", () => {
    //Null
    //undefined
    //nan
    //''
    //0
    //false
    const args = [null, undefined, NaN, "", 0, false];
    args.forEach(a => {
      expect(() => {
        lib.registerUser(a);
      }).toThrow();
    });
  });

  it("should return a user objet if a valid username is passed", () => {
    const result = lib.registerUser("juli");
    expect(result).toMatchObject({ username: "juli" });
    expect(result.id).toBeGreaterThan(0);
  });
});

//Mock functions
describe("applyDiscount", () => {
  it("should apply 10% discount if customer has more than 10 points", () => {
    db.getCustomerSync = function(customerId) {
      console.log("Fake reading customer");
      return { id: customerId, points: 20 };
    };

    const order = { customerId: 1, totalPrice: 10 };
    lib.applyDiscount(order);
    expect(order.totalPrice).toBe(9);
  });
});

describe("notifyCustomer", () => {
  it("should send an email to the customer", () => {
    //Antes de llamar esto debemos reemplazar la implementación
    //de db.GetCustomerSync, porque no vamos a leer la base de datos
    //vamos a simular que ya la leimos y tenemos el objeto.
    //Asi que traemos el modulo que tiene dicha implementacion: const db = require("../db");
    //y a la funcion la sobreescribmos así:
    // db.getCustomerSync = function (customerId){ return ... }
    //reemplazamos la implementación real de nuestro : getCustomerSync
    db.getCustomerSync = function(customerId) {
      return { mail: "a" };
    };

    let mailSent = false;
    mail.send = function(email, message) {
      mailSent = true;
    };

    lib.notifyCustomer({ customerId: 1 });
    expect(mailSent).toBe(true);
  });
});

describe("notifyCustomer with jest mock function ", () => {
  it("should send an email to the customer", () => {
    db.getCustomerSync = jest.fn().mockReturnValue({ email: "a" });
    mail.send = jest.fn();
  
    lib.notifyCustomer({ customerId: 1 });
    //expect(mail.send).toHaveBeenCalled();
    expect(mail.send).toHaveBeenCalledWith('a', "Your order was placed successfully.");
    expect(mail.send.mock.calls[0][0]).toBe('a');
    expect(mail.send.mock.calls[0][1]).toMatch(/order/);

  });
});
