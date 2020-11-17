/* eslint-disable immutable/no-mutation */
import httpMocks from 'node-mocks-http';
import { configApplication } from '../../../common/config/application';
import { middlewareApplicationCache } from '../application-cache';

Date.now = jest.fn().mockReturnValue(1234567890);

describe('middlewareApplicationCache', function fnDescribe() {
    // eslint-disable-next-line immutable/no-let
    let req, res;

    beforeEach(function fnBeforeEach() {
        req = httpMocks.createRequest();
        res = httpMocks.createResponse();
    });

    it('should handle basic request', function fnIt() {
        configApplication.applicationCache.use = true;
        configApplication.applicationCache.timeStamp = '2016-11-15';

        middlewareApplicationCache(req, res);

        expect(res.statusCode).toEqual(200);

        // eslint-disable-next-line no-underscore-dangle
        const data = res._getData();
        expect(data).toBeDefined();
        expect(data.indexOf('CACHE MANIFEST')).toEqual(0);
        expect(data.indexOf('CACHE:')).toBeGreaterThan(0);
        expect(data.indexOf('NETWORK:')).toBeGreaterThan(0);
        expect(data.indexOf('FALLBACK:')).toBeGreaterThan(0);
        expect(data.indexOf('Version')).toBeGreaterThan(0);
    });

    it('should set timestamp if not defined', function fnIt() {
        configApplication.applicationCache.use = true;
        configApplication.applicationCache.timeStamp = false;

        middlewareApplicationCache(req, res);

        expect(res.statusCode).toEqual(200);

        // eslint-disable-next-line no-underscore-dangle
        const data = res._getData();
        expect(data).toBeDefined();
        expect(data.indexOf('CACHE MANIFEST')).toEqual(0);
        expect(data.indexOf('CACHE:')).toBeGreaterThan(0);
        expect(data.indexOf('NETWORK:')).toBeGreaterThan(0);
        expect(data.indexOf('FALLBACK:')).toBeGreaterThan(0);
        // expect(data.indexOf('Version 1234567890')).toBeGreaterThan(0);
    });

    it('should return 404 if application cache is disabled', function fnIt() {
        configApplication.applicationCache.use = false;

        middlewareApplicationCache(req, res);

        expect(res.statusCode).toEqual(404);

        // eslint-disable-next-line no-underscore-dangle
        const data = res._getData();
        expect(data).toBeDefined();
        expect(data).toEqual('Not found.');
    });
});
