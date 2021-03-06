import { toBoolean } from '../parse';

describe('toBoolean', function fnDescribe() {
    it('should parse to boolean value', function fnIt() {
        expect(toBoolean(true)).toBeTruthy();
        expect(toBoolean('true')).toBeTruthy();
        expect(toBoolean('TRUE')).toBeTruthy();
        expect(toBoolean('1')).toBeTruthy();
        expect(toBoolean(false)).toBeFalsy();
        expect(toBoolean('false')).toBeFalsy();
        expect(toBoolean('FALSE')).toBeFalsy();
        expect(toBoolean('0')).toBeFalsy();

        expect(toBoolean('abc')).toBeUndefined();
        expect(toBoolean()).toBeUndefined();
    });
    it('should return the fallback value if value is not present', function fnIt() {
        expect(toBoolean(null, true)).toBeTruthy();
        expect(toBoolean(undefined, true)).toBeTruthy();
        expect(toBoolean('', true)).toBeTruthy();
        expect(toBoolean('abc', true)).toBeTruthy();

        expect(toBoolean(null, false)).toBeFalsy();
        expect(toBoolean(undefined, false)).toBeFalsy();
        expect(toBoolean('', false)).toBeFalsy();
        expect(toBoolean('abc', false)).toBeFalsy();
    });
});
