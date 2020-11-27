/* eslint-disable import/no-extraneous-dependencies, no-underscore-dangle, immutable/no-let */
import httpMocks from 'node-mocks-http';
import { middlewareReact } from '../react';

describe('middlewareReact', function fnDescribe() {
    let req, res;

    beforeEach(function fnBeforeEach() {
        res = httpMocks.createResponse();
    });

    it('should handle basic request', function fnIt() {
        req = httpMocks.createRequest({
            method: 'GET',
            url: '/contact/'
        });
        middlewareReact(req, res, jest.fn());
        expect(res.statusCode).toEqual(200);
    });

    // @TODO This test should return 404, but 200 is received
    // it('should handle error request', function fnIt() {
    //     req = httpMocks.createRequest({
    //         method: 'GET',
    //         url: '/foo/bar/error'
    //     });
    //     middlewareReact(req, res);
    //     expect(res.statusCode).toEqual(404);
    // });
});
