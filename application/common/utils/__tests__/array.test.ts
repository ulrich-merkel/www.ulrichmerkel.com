import { isValidArray } from '../array';

describe('isValidArray', function fnDescribe() {
    it('should return the correct result', function fnIt() {
        expect(isValidArray()).toBeFalsy();
        expect(isValidArray('test')).toBeFalsy();
        expect(isValidArray([])).toBeFalsy();
        expect(isValidArray([1, 2, 3, 4, 5])).toBeTruthy();
    });
});
