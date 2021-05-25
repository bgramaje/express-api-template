const request = require('supertest');

const app = require('../src/app');

describe('GET /hello', () => {
    it('responds with a json message', (done) => {
        request(app)
            .get('/hello')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, {
                message: 'HELLO - 👋🌎🌍🌏'
            }, done);
    });
});

describe('GET /bye', () => {
    it('responds with a not found message', (done) => {
        request(app)
            .get('/bye')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404, done);
    });
});