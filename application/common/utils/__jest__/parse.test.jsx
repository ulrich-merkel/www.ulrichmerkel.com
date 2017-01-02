/* eslint-disable func-names */
import { toBoolean } from './../parse';

describe('common/utils/parse', function () {
    it('should parse to boolean value via toBoolean', function () {
        expect(toBoolean(true)).toBeTruthy();
        expect(toBoolean('true')).toBeTruthy();
        expect(toBoolean('TRUE')).toBeTruthy();
        expect(toBoolean('1')).toBeTruthy();
        expect(toBoolean(false)).toBeFalsy();
        expect(toBoolean('false')).toBeFalsy();
        expect(toBoolean('FALSE')).toBeFalsy();
        expect(toBoolean('0')).toBeFalsy();

        expect(toBoolean('abc')).toBeUndefined();
        expect(toBoolean(123)).toBeUndefined();
        expect(toBoolean()).toBeUndefined();
    });
});
