/* eslint-disable func-names */
import configApplication, { port, host, sessionSecret, url } from './../application';

describe('config', function () {
    describe('application', function () {
        it('should have valid port and host', function () {
            expect(port).toBeDefined();
            expect(typeof port).toEqual('number');
            expect(host).toBeDefined();
            expect(typeof host).toEqual('string');
        });
        it('should have valid sessionSecret', function () {
            expect(sessionSecret).toBeDefined();
            expect(typeof sessionSecret).toEqual('string');
        });
        it('should have valid urls starting with a /', function () {
            Object.values(url).forEach(function (value) {
                expect(value.charAt(0)).toEqual('/');
            });
        });
        it('should have valid email', function () {
            const { email } = configApplication;
            expect(email).toBeDefined();
            expect(typeof email).toEqual('string');
            expect(email.indexOf('@')).toBeGreaterThan(0);
        });
    });
});