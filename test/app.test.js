const request = require('supertest');
const app = require('../src/app');

describe('GH-200 demo app', () => {
  it('GET / should return greeting text', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toMatch(/GH-200/);
  });

  it('GET /health should return JSON ok', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});
