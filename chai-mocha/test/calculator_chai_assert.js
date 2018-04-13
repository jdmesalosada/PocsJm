var assert = require('chai').assert;
var calculator = require('../calculator');

describe('Calculator test using ASSERT interface from CHAI module: ', function() {
  describe('Check addTested Function', function(){
    it('Check the returned value using : assert.equal(value, value): ', function() {
       result = calculator.addTested('text');
       assert.equal(result, 'text tested');
    })
  })
})
