/* eslint-disable func-names */
import {
    selectStateIntl,
    selectStateIntlLocale,
    selectStateIntlAvailableLocales
} from '../selector';
import { initialState, INTL_RESOURCE_NAME } from '../duck';

describe('selectStateIntl', function () {
    it('should return the correct state', function () {
        const state = {
            [INTL_RESOURCE_NAME]: {
                payload: {
                    locale: 'en-EN'
                }
            }
        };
        expect(selectStateIntl(state)).toEqual(
            state[INTL_RESOURCE_NAME]
        );
    });
    it("should return the initial state if resource key is not found", function () {
        const state = {
            foo: {
                bar: 'lorem'
            }
        };
        expect(selectStateIntl(state)).toEqual(
            initialState
        );
    });
    it("should return the initial state if no state is found", function () {
        expect(selectStateIntl()).toEqual(
            initialState
        );
    });
});

describe('selectStateIntlLocale', function () {
    it('should return the correct state', function () {
        const state = {
            [INTL_RESOURCE_NAME]: {
                payload: {
                    locale: 'en-EN'
                }
            }
        };
        expect(selectStateIntlLocale(state)).toEqual(
            state[INTL_RESOURCE_NAME].payload.locale
        );
    });
    it("should return the default locale if state isn't found", function () {
        const state = {
            foo: {
                bar: 'lorem'
            }
        };
        expect(selectStateIntlLocale(state)).toEqual(
            initialState.payload.locale
        );
    });
});

describe('selectStateIntlAvailableLocales', function () {
    it('should return the correct state', function () {
        const state = {
            [INTL_RESOURCE_NAME]: {
                payload: {
                    availableLocales: ['en-EN', 'de-DE', 'fr-FR']
                }
            }
        };
        expect(selectStateIntlAvailableLocales(state)).toEqual(
            state[INTL_RESOURCE_NAME].payload.availableLocales
        );
    });
    it("should return the default availableLocales if state isn't found", function () {
        const state = {
            foo: {
                bar: 'lorem'
            }
        };
        expect(selectStateIntlAvailableLocales(state)).toEqual(
            initialState.payload.availableLocales
        );
    });
});
