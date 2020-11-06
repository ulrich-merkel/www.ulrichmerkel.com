/* eslint-disable func-names, immutable/no-mutation */
import {
    CONFIG_CONTENT_ADD,
    CONFIG_TRANSLATION_ADD,
    addConfigContent,
    initialState,
    reducer,
    addConfigTranslation,
    FETCH_CONFIG_CONTENT_REQUEST,
    FETCH_CONFIG_CONTENT_SUCCESS,
    FETCH_CONFIG_TRANSLATION_REQUEST,
    FETCH_CONFIG_TRANSLATION_SUCCESS
} from '../duck';

Date.now = jest.fn().mockReturnValue(1234567890);
const dateNow = Date.now();

describe('addConfigContent', function () {
    it(`should have a type of ${CONFIG_CONTENT_ADD}`, function () {
        expect(addConfigContent().type).toEqual(CONFIG_CONTENT_ADD);
    });
    it('should pass on the content value we pass in', function () {
        const content = 'Lorem ipsum';
        expect(addConfigContent(content).data).toEqual(content);
    });
});
describe('addConfigTranslation', function () {
    it(`should have a type of ${CONFIG_TRANSLATION_ADD}`, function () {
        expect(addConfigTranslation().type).toEqual(CONFIG_TRANSLATION_ADD);
    });
    it('should pass on the content value we pass in', function () {
        const content = 'Lorem ipsum';
        const locale = 'de-DE';
        expect(addConfigTranslation(content, locale).data).toEqual(content);
        expect(addConfigTranslation(content, locale).locale).toEqual(locale);
    });
});

describe('reducer', function () {
    it('should return the initial state', function () {
        expect(reducer(undefined, {})).toEqual(initialState);
    });
    describe('config content', function () {
        it(`should react to an action with the type ${CONFIG_CONTENT_ADD}`, function () {
            const data = {
                foo: 'bar'
            };
            const content = {
                data,
                didInvalidate: false,
                isFetching: false,
                lastUpdated: dateNow
            };
            expect(
                reducer(undefined, {
                    type: CONFIG_CONTENT_ADD,
                    data,
                    receivedAt: dateNow
                })
            ).toEqual({
                content
            });
        });
        it(`should react to an action with the type ${FETCH_CONFIG_CONTENT_REQUEST}`, function () {
            const content = {
                didInvalidate: false,
                isFetching: true
            };
            expect(
                reducer(undefined, {
                    type: FETCH_CONFIG_CONTENT_REQUEST
                })
            ).toEqual({
                content
            });
        });
        it(`should react to an action with the type ${FETCH_CONFIG_CONTENT_SUCCESS}`, function () {
            const data = {
                foo: 'bar'
            };
            const content = {
                data,
                didInvalidate: false,
                isFetching: false,
                lastUpdated: dateNow
            };
            expect(
                reducer(undefined, {
                    type: FETCH_CONFIG_CONTENT_SUCCESS,
                    data,
                    receivedAt: dateNow
                })
            ).toEqual({
                content
            });
        });
    });
    describe('config translation', function () {
        const locale = 'en-EN';

        it(`should react to an action with the type ${CONFIG_TRANSLATION_ADD}`, function () {
            const data = {
                foo: 'bar'
            };
            const actionData = {
                data,
                didInvalidate: false,
                isFetching: false,
                lastUpdated: dateNow
            };
            expect(
                reducer(undefined, {
                    type: CONFIG_TRANSLATION_ADD,
                    data,
                    receivedAt: dateNow,
                    locale
                })
            ).toEqual({ ...initialState, [locale]: actionData });
        });
        it(`should react to an action with the type ${FETCH_CONFIG_TRANSLATION_REQUEST}`, function () {
            const actionData = {
                didInvalidate: false,
                isFetching: true
            };
            expect(
                reducer(undefined, {
                    type: FETCH_CONFIG_TRANSLATION_REQUEST,
                    locale
                })
            ).toEqual({ ...initialState, [locale]: actionData });
        });
        it(`should react to an action with the type ${FETCH_CONFIG_TRANSLATION_SUCCESS}`, function () {
            const data = {
                foo: 'bar'
            };
            const actionData = {
                data,
                didInvalidate: false,
                isFetching: false,
                lastUpdated: dateNow
            };
            expect(
                reducer(undefined, {
                    type: FETCH_CONFIG_TRANSLATION_SUCCESS,
                    data,
                    receivedAt: dateNow,
                    locale
                })
            ).toEqual({ ...initialState, [locale]: actionData });
        });
    });
});
