const request = require('supertest');
const express = require('express');
const app = express();

describe('Rider API', () => {
  it('should register a rider', async () => {
    const res = await request(app)
      .post('/api/riders')
      .send({
        "phone" : '01710000001',
        "email" : 'test@example.com'
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
  });
});