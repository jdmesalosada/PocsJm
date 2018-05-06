Mocha: Es un framework de pruebas. Permite ejecutar las pruebas en Node y en el navegador.
Permite la generación de reportes acerca del resultado de la ejecución.

Chai: Es una libreria que nos permite realizar aserciones con el fin de validar
el resultado de nuestros tests. Ofrece diferentes formas de escribir las aserciones permitiendo que
sean faciles de leer.
Las formas son: expect,should y assert.

Iniciacion del proyecto bajo el control de npm:

npm init --yes

Instalación Mocha:

Podemos instalar mocha de forma global: npm i -g mocha.

o a nivel de proyecto: npm i mocha.

Instalación Chai:

npm i chai

Para importar su funcionalidad:
var assert = require('chai').assert; -> se enfoca mas en el estilo para Tdd
var expect = require('chai').expect; -> se enfoca mas en el estilo para Bdd
var should = require('chai').should();-> se enfoca mas en el estilo para Bdd

Funcion a testear:
Creamos un nuevo archivo llamado calculator.js y agregamos la siguiente funcion:

exports.addTest = function(value1, value2) {
  var result = value1 + value2;
  return result;
}


Creamos un folder llamado test y dentro creamos calculator-tests.js:

var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;
var calculator = require('../calculator');

describe('Testing assert function: ', function() {
  describe('Check addTest Function', function(){
    it('Check the returned value using : assert.equal(value, value): ', function() {
       result = calculator.addTest(1,1);
       assert.equal(result, 2);
    });
  });
})

describe('Testing should function: ', function() {
    describe('Check addTest Function', function(){
      it('Check the returned value using : result.should.be.equal(value): ', function() {
         result = calculator.addTest(1,1);
         result.should.be.equal(2);
      })
    })
  })

  describe('Testing expect function: ', function() {
    describe('Check addTest Function', function(){
      it('Check the returned value using : expect(result).to.be.a(value);: ', function() {
         result = calculator.addTest(1,1);
          expect(result).to.equal(3);
      })
    })
  })

Ahora vamos a crear el comando que nos permitira ejecutar los tests.
Vamos al package.json:

 "test": "./node_modules/.bin/mocha --reporter spec"
 

 POSIBLES ERRORES:
  ReferenceError: describe is not defined

Si se llega a obtener el siguiente error es porque se intenta correr funciones de mocha  y o no
se tiene instalado de forma global o no se hace referencia a dicha libreria dentro del node modules.
"./node_modules/.bin/mocha