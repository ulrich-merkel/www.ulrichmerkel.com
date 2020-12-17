/**
 * @jest-environment node
 */
import supertest from 'supertest';
import { server } from '../server';

describe('server', function fnDescribe() {
    let listener;

    beforeAll(function fnBeforeAll() {
        listener = server();
    });
    afterAll(function fnAfterAll() {
        listener.close();
    });

    // @TODO: Find a way to handle base css and js here without bundling the whole thing
    // it('should handle react routing', async function fnIt() {
    //     const res = await supertest(listener).get('/persona');
    //     expect(res.statusCode).toEqual(200);
    //     expect(res.body).toMatchSnapshot();
    // });
    it('should handle unknown post requests', async function fnIt() {
        const res = await supertest(listener).post('/unknown/route').send({
            payload: 'Testing is cool'
        });
        expect(res.statusCode).toEqual(404);
        expect(res.body).toMatchSnapshot();
    });
});
