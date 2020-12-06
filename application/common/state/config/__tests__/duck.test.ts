/* eslint-disable func-names, immutable/no-mutation */
import { mockedState } from '../../../../__tests__/utils/get-mocked-store';
import {
    CONFIG_CONTENT_ADD,
    CONFIG_TRANSLATION_ADD,
    INITIAL_STATE,
    FETCH_CONFIG_CONTENT_REQUEST,
    FETCH_CONFIG_CONTENT_FAILURE,
    FETCH_CONFIG_CONTENT_SUCCESS,
    FETCH_CONFIG_TRANSLATION_REQUEST,
    FETCH_CONFIG_TRANSLATION_SUCCESS
} from '../constants';
import {
    shouldFetch,
    receiveConfigContent,
    requestConfigContent,
    receiveConfigTranslation,
    addConfigContent,
    requestConfigTranslation,
    failedConfigContent,
    reducer,
    addConfigTranslation
} from '../duck';

Date.now = jest.fn().mockReturnValue(1234567890);
const dateNow = Date.now();

describe('shouldFetch', function fnDescribe() {
    it('should decide correctly to fetch', function fnIt() {
        expect(shouldFetch()).toBeTruthy();
        expect(
            shouldFetch(
                {
                    ...mockedState,
                    config: {
                        content: {
                            data: null
                        }
                    }
                },
                'config.content'
            )
        ).toBeTruthy();
        expect(
            shouldFetch(
                {
                    ...mockedState,
                    config: {
                        content: {
                            isFetching: true,
                            data: { foo: 'bar' }
                        }
                    }
                },
                'config.content'
            )
        ).toBeFalsy();
        expect(
            shouldFetch(
                {
                    ...mockedState,
                    config: {
                        content: {
                            didInvalidate: false,
                            isFetching: false,
                            data: { foo: 'bar' }
                        }
                    }
                },
                'config.content'
            )
        ).toBeFalsy();
        expect(
            shouldFetch(
                {
                    ...mockedState,
                    config: {
                        content: {
                            didInvalidate: true,
                            isFetching: false,
                            data: { foo: 'bar' }
                        }
                    }
                },
                'config.content'
            )
        ).toBeTruthy();
    });
});

describe('requestConfigContent', function fnDescribe() {
    it(`should have a type of ${FETCH_CONFIG_CONTENT_REQUEST}`, function fnIt() {
        expect(requestConfigContent().type).toEqual(
            FETCH_CONFIG_CONTENT_REQUEST
        );
    });
});

describe('requestConfigTranslation', function fnDescribe() {
    it(`should have a type of ${FETCH_CONFIG_TRANSLATION_REQUEST}`, function fnIt() {
        expect(requestConfigTranslation('de-DE').type).toEqual(
            FETCH_CONFIG_TRANSLATION_REQUEST
        );
    });
    it('should pass on the content value we pass in', function fnIt() {
        const locale = 'de-DE';
        expect(requestConfigTranslation(locale).locale).toEqual(locale);
    });
});

describe('receiveConfigContent', function fnDescribe() {
    it(`should have a type of ${FETCH_CONFIG_CONTENT_SUCCESS}`, function fnIt() {
        expect(receiveConfigContent('de-DE').type).toEqual(
            FETCH_CONFIG_CONTENT_SUCCESS
        );
    });
    it('should pass on the content value we pass in', function fnIt() {
        const data = { foo: 'bar' };
        expect(receiveConfigContent(data).data).toEqual(data);
    });
});

describe('receiveConfigTranslation', function fnDescribe() {
    it(`should have a type of ${FETCH_CONFIG_TRANSLATION_SUCCESS}`, function fnIt() {
        expect(receiveConfigTranslation({ foo: 'bar' }, 'de-DE').type).toEqual(
            FETCH_CONFIG_TRANSLATION_SUCCESS
        );
    });
    it('should pass on the content value we pass in', function fnIt() {
        const data = { foo: 'bar' };
        expect(receiveConfigTranslation(data, 'de-DE').data).toEqual(data);
    });
});

describe('failedConfigContent', function fnDescribe() {
    it(`should have a type of ${FETCH_CONFIG_CONTENT_FAILURE}`, function fnIt() {
        expect(failedConfigContent().type).toEqual(
            FETCH_CONFIG_CONTENT_FAILURE
        );
    });
});

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
        expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
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
            ).toEqual({ ...INITIAL_STATE, [locale]: actionData });
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
            ).toEqual({ ...INITIAL_STATE, [locale]: actionData });
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
            ).toEqual({ ...INITIAL_STATE, [locale]: actionData });
        });
    });
});
