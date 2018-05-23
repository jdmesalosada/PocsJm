const lib = require('../lib');

//test es una función que viene con jest.
//el primer argumento es el nombre del test.
//el segundo argumento es una funcion donde implementamos nuestro test
test('absolute - should return a positive number if input is positive', () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
});

test('absolute - should return a positive number if input is negative', () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
});

test('absolute - should return 0 if input is 0', () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
});