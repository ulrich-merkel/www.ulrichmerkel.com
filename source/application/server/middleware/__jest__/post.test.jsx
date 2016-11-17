/* eslint-disable import/no-extraneous-dependencies, func-names, no-underscore-dangle */
import httpMocks from 'node-mocks-http';
import middleware from './../post';

describe('server/middleware/post', function () {
    let req,
        res;

    beforeEach(function () {
        req = httpMocks.createRequest();
        res = httpMocks.createResponse();
    });

    describe('post', function () {

        it('should handle basic request', function () {
            req = httpMocks.createRequest({
                method: 'POST',
                body: {
                    name: 'bar',
                    email: 'bar@foo.de',
                    subject: 'foo-bar',
                    message: 'foo! bar, foo!'
                }
            });
            middleware(req, res);

            expect(res.statusCode).toEqual(200);

            const data = res._getData();
            expect(data).toBeDefined();
            expect(data).toEqual('');
        });

        it('should redirect if no data recieved', function () {
            req = httpMocks.createRequest({
                method: 'POST',
                params: {
                    id: 42
                }
            });
            middleware(req, res);

            expect(res.statusCode).toEqual(301);

            const data = res._getData();
            expect(data).toBeDefined();
            expect(data).toEqual('');
        });

        it('should redirect if data is not valid', function () {
            req = httpMocks.createRequest({
                method: 'POST',
                body: {
                    name: '',
                    email: 'bar-foo.de',
                    subject: '',
                    message: ''
                }
            });
            middleware(req, res);

            expect(res.statusCode).toEqual(301);

            const data = res._getData();
            expect(data).toBeDefined();
            expect(data).toEqual('');
        });

    });

});
