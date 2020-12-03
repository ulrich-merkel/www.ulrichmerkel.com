import {
    AVAILABLE_LOCALES,
    INITIAL_STATE,
    INTL_RESOURCE_NAME,
    INTL_CHANGE_LOCALE,
    INTL_LOCALE_DE_DE
} from '../constants';
import { changeIntlLocale, reducer, reducerIntl } from '../duck';

describe('changeIntlLocale', function fnDescribe() {
    it(`should have a type of ${INTL_CHANGE_LOCALE}`, function fnIt() {
        expect(changeIntlLocale().type).toEqual(INTL_CHANGE_LOCALE);
    });
    it('should pass on the locale value we pass in', function fnIt() {
        const locale = INTL_LOCALE_DE_DE;
        expect(changeIntlLocale(locale).locale).toEqual(locale);
    });
});

describe('reducer', function fnDescribe() {
    it('should return the initial state', function fnIt() {
        expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
    });
    it(`should react to an action with the type ${INTL_CHANGE_LOCALE}`, function fnIt() {
        expect(
            reducer(undefined, {
                type: INTL_CHANGE_LOCALE,
                locale: AVAILABLE_LOCALES[0]
            })
        ).toMatchSnapshot();
    });
    it(`should not react to an action with the type ${INTL_CHANGE_LOCALE} and unknown locale`, function fnIt() {
        expect(
            reducer(undefined, {
                type: INTL_CHANGE_LOCALE,
                locale: 'lorem'
            })
        ).toMatchSnapshot();
    });
    it(`should react to an action with the type ${INTL_CHANGE_LOCALE}, unknown locale and fallback`, function fnIt() {
        expect(
            reducer(undefined, {
                type: INTL_CHANGE_LOCALE,
                locale: 'lorem',
                fallback: AVAILABLE_LOCALES[0]
            })
        ).toMatchSnapshot();
    });
    it('should return the current state if payload is empty', function fnIt() {
        expect(
            reducer(INITIAL_STATE, {
                type: INTL_CHANGE_LOCALE
            })
        ).toEqual(INITIAL_STATE);
    });
});

describe('reducerIntl', function fnDescribe() {
    it(`should have a key of ${INTL_RESOURCE_NAME}`, function fnIt() {
        expect(reducerIntl).toEqual(
            expect.objectContaining({
                [INTL_RESOURCE_NAME]: reducer
            })
        );
    });
});
