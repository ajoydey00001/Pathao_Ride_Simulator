import request from 'supertest';
import assert from 'assert';
import app from '../app.js';

describe('Rider API', function () {
  it('should register a new rider', async function () {
    const res = await request(app)
      .post('/api/riders')
      .send({
        "phone": '01710000001',
        "email" : 'rider@example.com'
      });

    assert.strictEqual(res.status, 201);
    assert.ok(res.body.id);
    assert.strictEqual(res.body.phone, '01710000001');
  });

  
});
