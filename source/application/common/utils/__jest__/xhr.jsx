/* eslint-disable func-names */
import nock from 'nock'; // eslint-disable-line import/no-extraneous-dependencies

import xhr from './../xhr';
import { host, port } from './../../config/application';

const data = {
    body: {
        foo: 'bar',
        bar: ['foo']
    }
};

describe('xhr', function () {

    afterEach(function () {
        nock.cleanAll();
    });

    it('should call post with default options', function () {
        const callback = jest.fn();
        nock(`http://${host}:${port}`)
            .post('/test', {})
            .reply(200, data);

        return xhr('/test').then(function (response) {
            expect(response.status).toEqual(200);
            expect(callback).not.toBeCalled();
        }).catch(callback);
    });

    it('should catch response status errors', function () {
        const callback = jest.fn();
        nock(`http://${host}:${port}`)
            .post('/test', {})
            .reply(500, data);

        return xhr('/test').then(callback).catch(function () {
            expect(callback).not.toBeCalled();
        });
    });

    it('should call get when set as option', function () {
        const callback = jest.fn();
        nock(`http://${host}:${port}`)
            .get('/test')
            .reply(200, data);

        return xhr('/test', { method: 'GET' }).then(function (response) {
            expect(response.status).toEqual(200);
            expect(callback).not.toBeCalled();
        }).catch(callback);
    });

});
