import chai = require('chai');
chai.use(require('chai-as-promised'));

const expect = chai.expect;

export const include = expected => actual => expect(actual).to.eventually.include(expected);