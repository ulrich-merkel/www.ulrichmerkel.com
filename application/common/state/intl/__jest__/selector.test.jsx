/* eslint-disable func-names */
import { selectStateIntlLocale, selectStateIntlAvailableLocales } from './../selector';
import { defaultState } from './../reducer';

describe('common/state/intl/selector', function () {
    describe('selectStateIntlLocale', function () {
        it('should return the correct state', function () {
            const state = Object.assign({}, {
                intl: {
                    locale: 'en-EN'
                }
            });
            expect(selectStateIntlLocale(state)).toEqual(state.intl.locale);
        });
        it('should return the default locale if state isn\'t found', function () {
            const state = Object.assign({}, {
                foo: {
                    bar: 'lorem'
                }
            });
            expect(selectStateIntlLocale(state)).toEqual(defaultState.locale);
        });
    });
    describe('selectStateIntlAvailableLocales', function () {
        it('should return the correct state', function () {
            const state = Object.assign({}, {
                intl: {
                    availableLocales: ['en-EN', 'de-DE', 'fr-FR']
                }
            });
            expect(selectStateIntlAvailableLocales(state)).toEqual(state.intl.availableLocales);
        });
        it('should return the default availableLocales if state isn\'t found', function () {
            const state = Object.assign({}, {
                foo: {
                    bar: 'lorem'
                }
            });
            expect(selectStateIntlAvailableLocales(state)).toEqual(defaultState.availableLocales);
        });
    });
});
