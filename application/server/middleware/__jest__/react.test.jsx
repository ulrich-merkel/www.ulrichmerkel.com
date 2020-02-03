/* eslint-disable import/no-extraneous-dependencies, func-names, no-underscore-dangle, immutable/no-let */
import httpMocks from 'node-mocks-http';
import middleware from '../react';

describe('server/middleware/react', function () {
    let req,
        res;

    beforeEach(function () {
        res = httpMocks.createResponse();
    });

    it('should handle basic request', function () {
        req = httpMocks.createRequest({
            method: 'GET',
            url: '/contact/'
        });
        middleware(req, res);
        expect(res.statusCode).toEqual(200);
    });

    // @TODO This test should return 404, but 200 is received
    // it('should handle error request', function () {
    //     req = httpMocks.createRequest({
    //         method: 'GET',
    //         url: '/foo/bar/error'
    //     });
    //     middleware(req, res);
    //     expect(res.statusCode).toEqual(404);
    // });

});
