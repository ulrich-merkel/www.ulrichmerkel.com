/* eslint-disable func-names */
/* global describe, it, expect */
import { email, required } from './../validation';

describe('validation', function () {

    it('should validated an email address', function () {
        expect(email('test@test.de')).toBeTruthy();
        expect(email('asldj.asdwe')).toBeFalsy();
    });

    it('should validated a required field', function () {
        expect(required('something')).toBeTruthy();
        expect(required()).toBeFalsy();
        expect(required('')).toBeFalsy();
        expect(required(null)).toBeFalsy();
    });

});
