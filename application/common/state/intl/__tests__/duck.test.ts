/* eslint-disable func-names */
import {
    AVAILABLE_LOCALES,
    changeIntlLocale,
    initialState,
    reducer,
    INTL_RESOURCE_NAME,
    INTL_CHANGE_LOCALE,
    INTL_LOCALE_DE_DE,
    reducerIntl
} from '../duck';

describe('changeIntlLocale', function () {
    it(`should have a type of ${INTL_CHANGE_LOCALE}`, function () {
        expect(changeIntlLocale().type).toEqual(INTL_CHANGE_LOCALE);
    });
    it('should pass on the locale value we pass in', function () {
        const locale = INTL_LOCALE_DE_DE;
        expect(changeIntlLocale(locale).locale).toEqual(locale);
    });
});

describe('reducer', function () {
    it('should return the initial state', function () {
        expect(reducer(undefined, {})).toEqual(initialState);
    });
    it(`should react to an action with the type ${INTL_CHANGE_LOCALE}`, function () {
        expect(
            reducer(undefined, {
                type: INTL_CHANGE_LOCALE,
                locale: AVAILABLE_LOCALES[0]
            })
        ).toMatchSnapshot();
    });
    it(`should not react to an action with the type ${INTL_CHANGE_LOCALE} and unknown locale`, function () {
        expect(
            reducer(undefined, {
                type: INTL_CHANGE_LOCALE,
                locale: 'lorem'
            })
        ).toMatchSnapshot();
    });
    it(`should react to an action with the type ${INTL_CHANGE_LOCALE}, unknown locale and fallback`, function () {
        expect(
            reducer(undefined, {
                type: INTL_CHANGE_LOCALE,
                locale: 'lorem',
                fallback: AVAILABLE_LOCALES[0]
            })
        ).toMatchSnapshot();
    });
    it('should return the current state if payload is empty', function () {
        expect(
            reducer(initialState, {
                type: INTL_CHANGE_LOCALE
            })
        ).toEqual(initialState);
    });
});

describe('reducerIntl', function () {
    it(`should have a key of ${INTL_RESOURCE_NAME}`, function () {
        expect(reducerIntl).toEqual(
            expect.objectContaining({
                [INTL_RESOURCE_NAME]: reducer
            })
        );
    });
});
