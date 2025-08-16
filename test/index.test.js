const { expect } = require('chai');
const request = require('supertest'); // Optional, for API testing
const app = require('../index'); // Adjust path to your main app file

describe('Pipe App Tests', () => {
  it('should return a welcome message on GET /', async () => {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
    expect(res.body.message).to.equal('Welcome to pipe-app!');
  });

  it('should return 404 for unknown routes', async () => {
    const res = await request(app).get('/unknown');
    expect(res.status).to.equal(404);
  });
});
