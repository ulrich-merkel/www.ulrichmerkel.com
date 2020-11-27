import { isNumber, isString } from 'lodash';
import {
    configApplication,
    port,
    host,
    sessionSecret,
    url
} from '../application';

describe('configApplication', () => {
    it('should have valid port and host', () => {
        expect(port).toBeDefined();
        expect(isNumber(port) || isString(port)).toBeTruthy();
        expect(host).toBeDefined();
        expect(typeof host).toEqual('string');
    });
    it('should have valid sessionSecret', () => {
        expect(sessionSecret).toBeDefined();
        expect(typeof sessionSecret).toEqual('string');
    });
    it('should have valid urls starting with a /', () => {
        Object.values(url).forEach((value) => {
            expect(value.charAt(0)).toEqual('/');
        });
    });
    it('should have valid email', () => {
        const { email } = configApplication;
        expect(email).toBeDefined();
        expect(typeof email).toEqual('string');
        expect(email.indexOf('@')).toBeGreaterThan(0);
    });
});
