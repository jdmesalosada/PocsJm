const lib = require('../lib');

//test es una función que viene con jest. La funcion test la podemos reemplazar por it
//el primer argumento es el nombre del test.
//el segundo argumento es una funcion donde implementamos nuestro test
//En jasmine tenemos la función describe para agrupar un conjunto de funciones
//relacionadas.
describe('absoulte', () => {
    it('should return a positive number if input is positive', () => {
        const result = lib.absolute(1);
        expect(result).toBe(1);
    });

    it('should return a positive number if input is negative', () => {
        const result = lib.absolute(-1);
        expect(result).toBe(1);
    });

    it('should return 0 if input is 0', () => {
        const result = lib.absolute(0);
        expect(result).toBe(0);
    });
});

describe('greet', () => {
    it('should return the greeting message', () => {
       const result = lib.greet('Juli');
       expect(result).toBe('Welcome Juli');
    })
});

