/* eslint-disable func-names, import/first, import/no-extraneous-dependencies, no-underscore-dangle */
jest.mock('./../../../common/config/content', function () {
    return {
        content: 'foo'
    };
});
jest.mock('./../../../common/config/i18n/en-EN', function () {
    return {
        key: 'en-EN'
    };
});
jest.mock('./../../../common/config/i18n/de-DE', function () {
    return {
        key: 'de-DE'
    };
});

import httpMocks from 'node-mocks-http';
import { url } from './../../../common/config/application';
import middleware from './../api';

describe('server/middleware/api', function () {
    let res;

    beforeEach(function () {
        res = httpMocks.createResponse();
    });

    it('should handle config content request', function () {
        const req = httpMocks.createRequest({
            method: 'GET',
            url: url.apiConfigContent
        });
        middleware(req, res);

        const data = JSON.parse(res._getData());

        expect(data).toBeDefined();
        expect(res.statusCode).toEqual(200);
        // expect(res._isEndCalled()).toBeTruthy();
        expect(res._isJSON()).toBeTruthy();
        expect(res._isUTF8()).toBeTruthy();
        expect(data.content).toEqual('foo');
    });

    it('should handle config en-en request', function () {
        const req = httpMocks.createRequest({
            method: 'GET',
            url: url.apiConfigEnEn
        });
        middleware(req, res);

        expect(res.statusCode).toEqual(200);
        // expect(res._isEndCalled()).toBeTruthy();
        expect(res._isJSON()).toBeTruthy();
        expect(res._isUTF8()).toBeTruthy();

        const data = JSON.parse(res._getData());
        expect(data).toBeDefined();
        expect(data.key).toEqual('en-EN');
    });

    it('should handle config de-de request', function () {
        const req = httpMocks.createRequest({
            method: 'GET',
            url: url.apiConfigDeDe
        });
        middleware(req, res);

        expect(res.statusCode).toEqual(200);
        // expect(res._isEndCalled()).toBeTruthy();
        expect(res._isJSON()).toBeTruthy();
        expect(res._isUTF8()).toBeTruthy();

        const data = JSON.parse(res._getData());
        expect(data).toBeDefined();
        expect(data.key).toEqual('de-DE');
    });
});
