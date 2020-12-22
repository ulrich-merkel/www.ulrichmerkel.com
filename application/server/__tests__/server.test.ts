/**
 * @jest-environment node
 */
// jest.mock('fs');

// import fs from 'fs';
import supertest from 'supertest';
import { server } from '../server';

describe('server', function fnDescribe() {
    // const MOCK_FILE_INFO = {
    //     '../../../../../public/css/base.css': 'div { display: block; }',
    //     '../../../../../public/js/bootstrap.bundle.js': 'console.log("file1 contents");'
    // };
    let listener;

    beforeAll(function fnBeforeAll() {
        // fs.__setMockFiles(MOCK_FILE_INFO);
        listener = server();
    });
    afterAll(function fnAfterAll() {
        listener.close();
    });

    // @TODO: Find a way to handle base css and js here without bundling the whole thing
    // it('should handle react routing', async function fnIt() {
    //     const res = await supertest(listener).get('/imprint');
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
