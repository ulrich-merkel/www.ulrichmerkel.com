import { email, required, isValidValue } from '../validation';

describe('email', function fnDescribe() {
    it('should validated an email address', function fnIt() {
        expect(email('test@test.de')).toBeTruthy();
        expect(email('asldj.asdwe')).toBeFalsy();
        expect(email('asldj')).toBeFalsy();
    });
});

describe('required', function fnDescribe() {
    it('should validated a required field', function () {
        expect(required('something')).toBeTruthy();
        expect(required()).toBeFalsy();
        expect(required('')).toBeFalsy();
        expect(required(null)).toBeFalsy();
    });
});

describe('isValidValue', function fnDescribe() {
    it('should validated an email address', function fnIt() {
        expect(isValidValue('test@test.de')).toBeTruthy();
        expect(isValidValue('')).toBeFalsy();
        expect(isValidValue(null)).toBeFalsy();
        expect(isValidValue()).toBeFalsy();
    });
});
