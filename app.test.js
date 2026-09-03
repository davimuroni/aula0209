const request = require('supertest');
const app = require('./app');

describe('Teste da aplicação', () => {
    test('Deve retornar Olá Mundo DevOps!', async () => {
        const response = await request(app).get('/');

        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Olá Mundo DevOps!');
    });
});