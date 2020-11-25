/* eslint-disable import/no-extraneous-dependencies, immutable/no-let, immutable/no-mutation, no-underscore-dangle */
import httpMocks from 'node-mocks-http';
import { middlewareError } from '../error';

describe('middlewareError', function fnDescribe() {
    let req, res, err, next;

    beforeEach(function fnBeforeEach() {
        err = {};
        req = httpMocks.createRequest();
        res = httpMocks.createResponse();
        next = jest.fn();
    });

    it('should handle basic errors', function fnIt() {
        middlewareError(err, req, res, next);

        expect(res.statusCode).toEqual(404);

        const data = res._getData();
        expect(data).toBeDefined();
        expect(data).toEqual('Sorry - not found!');
    });

    it('should handle forbidden errors', function fnIt() {
        err.code = 'EBADCSRFTOKEN';
        middlewareError(err, req, res, next);

        expect(res.statusCode).toEqual(403);

        const data = res._getData();
        expect(data).toBeDefined();
        expect(data).toEqual('Sorry - not found!');
    });
});
