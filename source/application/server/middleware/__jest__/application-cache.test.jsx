/* eslint-disable func-names, import/first, import/no-extraneous-dependencies, no-underscore-dangle */
jest.mock('./../../../common/config/application');

import httpMocks from 'node-mocks-http';
import config from './../../../common/config/application';
import middleware from './../application-cache';

Date.now = jest.genMockFunction().mockReturnValue(1234567890);

describe('server/middleware/application-cache', function () {
    let req,
        res;

    beforeEach(function () {
        req = httpMocks.createRequest();
        res = httpMocks.createResponse();
    });

    it('should handle basic request', function () {
        config.applicationCache.use = true;
        config.applicationCache.timeStamp = '2016-11-15';

        middleware(req, res);

        expect(res.statusCode).toEqual(200);

        const data = res._getData();
        expect(data).toBeDefined();
        expect(data.indexOf('CACHE MANIFEST')).toEqual(0);
        expect(data.indexOf('CACHE:')).toBeGreaterThan(0);
        expect(data.indexOf('NETWORK:')).toBeGreaterThan(0);
        expect(data.indexOf('FALLBACK:')).toBeGreaterThan(0);
        expect(data.indexOf('Version')).toBeGreaterThan(0);
    });

    it('should set timestamp if not defined', function () {
        config.applicationCache.use = true;
        config.applicationCache.timeStamp = false;

        middleware(req, res);

        expect(res.statusCode).toEqual(200);

        const data = res._getData();
        expect(data).toBeDefined();
        expect(data.indexOf('CACHE MANIFEST')).toEqual(0);
        expect(data.indexOf('CACHE:')).toBeGreaterThan(0);
        expect(data.indexOf('NETWORK:')).toBeGreaterThan(0);
        expect(data.indexOf('FALLBACK:')).toBeGreaterThan(0);
        expect(data.indexOf('Version 1234567890')).toBeGreaterThan(0);
    });

    it('should return 404 if application cache is disabled', function () {
        config.applicationCache.use = false;

        middleware(req, res);

        expect(res.statusCode).toEqual(404);

        const data = res._getData();
        expect(data).toBeDefined();
        expect(data).toEqual('Not found.');
    });

});
