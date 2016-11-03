/* eslint-disable func-names*/
/* global describe, it, expect */
import { INTL_CHANGE_LOCALE, AVAILABLE_LOCALES } from './../constants';
import reducer, { defaultState } from './../reducer';

describe('reducer', function () {
    it('should return the initial state', function () {
        expect(reducer(undefined, {})).toEqual(defaultState);
    });
    it(`should react to an action with the type ${INTL_CHANGE_LOCALE}`, function () {
        expect(reducer(undefined, {
            type: INTL_CHANGE_LOCALE,
            locale: AVAILABLE_LOCALES[0]
        })).toEqual({
            locale: AVAILABLE_LOCALES[0],
            availableLocales: AVAILABLE_LOCALES
        });
    });
    it(`should not react to an action with the type ${INTL_CHANGE_LOCALE} and unknown locale`, function () {
        expect(reducer(undefined, {
            type: INTL_CHANGE_LOCALE,
            locale: 'lorem'
        })).toEqual(defaultState);
    });
    it(`should react to an action with the type ${INTL_CHANGE_LOCALE}, unknown locale and fallback`, function () {
        expect(reducer(undefined, {
            type: INTL_CHANGE_LOCALE,
            locale: 'lorem',
            fallback: AVAILABLE_LOCALES[0]
        })).toEqual({
            locale: AVAILABLE_LOCALES[0],
            availableLocales: AVAILABLE_LOCALES
        });
    });
    it('should return the current state if payload is empty', function () {
        expect(reducer(defaultState, {
            type: INTL_CHANGE_LOCALE
        })).toEqual(defaultState);
    });
});
