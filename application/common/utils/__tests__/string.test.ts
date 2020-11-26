import { isValidString } from '../string';

describe('isValidString', function fnDescribe() {
    it('should return the correct result', function fnIt() {
        expect(isValidString()).toBeFalsy();
        expect(isValidString([1, 2, 3, 4, 5])).toBeFalsy();
        expect(isValidString('test')).toBeTruthy();
    });
});
