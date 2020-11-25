/* eslint-disable import/no-extraneous-dependencies, no-underscore-dangle, immutable/no-let */
import httpMocks from 'node-mocks-http';
import { middlewarePost } from '../post';

describe('middlewarePost', function fnDescribe() {
    let req, res;

    beforeEach(function fnBeforeEach() {
        req = httpMocks.createRequest();
        res = httpMocks.createResponse();
    });

    it('should handle basic request', function fnIt() {
        req = httpMocks.createRequest({
            method: 'POST',
            body: {
                name: 'bar',
                email: 'bar@foo.de',
                subject: 'foo-bar',
                message: 'foo! bar, foo!'
            }
        });
        middlewarePost(req, res);

        expect(res.statusCode).toEqual(200);

        const data = res._getData();
        expect(data).toBeDefined();
        expect(data).toEqual('');
    });

    // it('should redirect if no data recieved', function fnIt() {
    //     req = httpMocks.createRequest({
    //         method: 'POST',
    //         params: {
    //             id: 42
    //         }
    //     });
    //     middlewarePost(req, res);

    //     expect(res.statusCode).toEqual(301);

    //     const data = res._getData();
    //     expect(data).toBeDefined();
    //     expect(data).toEqual('');
    // });

    // it('should redirect if data is not valid', function fnIt() {
    //     req = httpMocks.createRequest({
    //         method: 'POST',
    //         body: {
    //             name: '',
    //             email: 'bar-foo.de',
    //             subject: '',
    //             message: ''
    //         }
    //     });
    //     middlewarePost(req, res);

    //     expect(res.statusCode).toEqual(301);

    //     const data = res._getData();
    //     expect(data).toBeDefined();
    //     expect(data).toEqual('');
    // });
});
