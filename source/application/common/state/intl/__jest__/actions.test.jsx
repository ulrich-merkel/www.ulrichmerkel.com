/* eslint-disable func-names*/
/* global describe, it, expect */
import { INTL_CHANGE_LOCALE, INTL_LOCALE_DE_DE } from './../constants';
import { changeLocale } from './../actions';

describe('actions', function () {
    describe('changeLocale', function () {
        it(`should have a type of ${INTL_CHANGE_LOCALE}`, function () {
            expect(changeLocale().type).toEqual(INTL_CHANGE_LOCALE);
        });
        it('should pass on the locale value we pass in', function () {
            var locale = INTL_LOCALE_DE_DE;
            expect(changeLocale(locale).locale).toEqual(locale);
        });
    });
});
