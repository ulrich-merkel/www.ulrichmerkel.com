import { isNumber, isString } from 'lodash';
import {
    configApplication,
    port,
    host,
    sessionSecret,
    url
} from '../application';

describe('configApplication', function fnDescribe() {
    it('should have valid port and host', function fnIt() {
        expect(port).toBeDefined();
        expect(isNumber(port) || isString(port)).toBeTruthy();
        expect(host).toBeDefined();
        expect(typeof host).toEqual('string');
    });
    it('should have valid sessionSecret', function fnIt() {
        expect(sessionSecret).toBeDefined();
        expect(typeof sessionSecret).toEqual('string');
    });
    it('should have valid urls starting with a /', function fnIt() {
        Object.values(url).forEach(function fnForEach(value) {
            expect(value.charAt(0)).toEqual('/');
        });
    });
    it('should have valid email', function fnIt() {
        const { email } = configApplication;
        expect(email).toBeDefined();
        expect(typeof email).toEqual('string');
        expect(email.indexOf('@')).toBeGreaterThan(0);
    });
});
