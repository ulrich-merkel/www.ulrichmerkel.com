/* eslint-disable import/no-extraneous-dependencies, func-names, no-underscore-dangle */
import httpMocks from 'node-mocks-http';
import middleware from './../react';

describe('server/middleware/react', function () {
    let req,
        res;

    beforeEach(function () {
        req = httpMocks.createRequest();
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

});
