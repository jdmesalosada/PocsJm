
const as400Connection = require('node-jt400');

let server;

describe('api/bills/create', () => {
  beforeEach(() => { server = require('../../index'); })
  afterEach(async () => { 
    await server.close(); 
  });

  describe('GET /', () => {
    it('should return ****', async () => {
    });
  });
});