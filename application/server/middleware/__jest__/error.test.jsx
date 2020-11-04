/* eslint-disable import/no-extraneous-dependencies, func-names, no-underscore-dangle, immutable/no-let, immutable/no-mutation */
import httpMocks from 'node-mocks-http';
import middleware from '../error';

describe('server/middleware/error', function () {
    let req, res, err, next;

    beforeEach(function () {
        err = {};
        req = httpMocks.createRequest();
        res = httpMocks.createResponse();
        next = jest.fn();
    });

    it('should handle basic errors', function () {
        middleware(err, req, res, next);

        expect(res.statusCode).toEqual(404);

        const data = res._getData();
        expect(data).toBeDefined();
        expect(data).toEqual('Sorry - not found!');
    });

    it('should handle forbidden errors', function () {
        err.code = 'EBADCSRFTOKEN';
        middleware(err, req, res, next);

        expect(res.statusCode).toEqual(403);

        const data = res._getData();
        expect(data).toBeDefined();
        expect(data).toEqual('Sorry - not found!');
    });
});
