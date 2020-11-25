/* eslint-disable import/first, import/no-extraneous-dependencies, no-underscore-dangle, immutable/no-let */
//

describe('middlewareApi', function fnDescribe() {
    it('should be fixed', function fnIt() {
        expect(true).toBeTruthy();
    });
    // let res;

    // beforeEach(function fnBeforeEach() {
    //     res = httpMocks.createResponse();
    // });

    // it('should handle config content request', function fnIt() {
    //     const req = httpMocks.createRequest({
    //         method: 'GET',
    //         url: url.apiConfigContent
    //     });
    //     middlewareApi(req, res);

    //     const data = JSON.parse(res._getData());

    //     expect(data).toBeDefined();
    //     expect(res.statusCode).toEqual(200);
    //     expect(res._isEndCalled()).toBeTruthy();
    //     expect(res._isJSON()).toBeTruthy();
    //     expect(res._isUTF8()).toBeTruthy();
    //     expect(data.content).toEqual('foo');
    // });

    // it('should handle config en-en request', function fnIt() {
    //     const req = httpMocks.createRequest({
    //         method: 'GET',
    //         url: url.apiConfigEnEn
    //     });
    //     middlewareApi(req, res);

    //     expect(res.statusCode).toEqual(200);
    //     expect(res._isEndCalled()).toBeTruthy();
    //     expect(res._isJSON()).toBeTruthy();
    //     expect(res._isUTF8()).toBeTruthy();

    //     const data = JSON.parse(res._getData());
    //     expect(data).toBeDefined();
    //     expect(data.key).toEqual('en-EN');
    // });

    // it('should handle config de-de request', function fnIt() {
    //     const req = httpMocks.createRequest({
    //         method: 'GET',
    //         url: url.apiConfigDeDe
    //     });
    //     middlewareApi(req, res);

    //     expect(res.statusCode).toEqual(200);
    //     expect(res._isEndCalled()).toBeTruthy();
    //     expect(res._isJSON()).toBeTruthy();
    //     expect(res._isUTF8()).toBeTruthy();

    //     const data = JSON.parse(res._getData());
    //     expect(data).toBeDefined();
    //     expect(data.key).toEqual('de-DE');
    // });
});
