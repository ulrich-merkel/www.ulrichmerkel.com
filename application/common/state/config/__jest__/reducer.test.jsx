/* eslint-disable func-names */
import {
    CONFIG_CONTENT_ADD,
    FETCH_CONFIG_CONTENT_REQUEST,
    FETCH_CONFIG_CONTENT_SUCCESS,
    CONFIG_TRANSLATION_ADD,
    FETCH_CONFIG_TRANSLATION_REQUEST,
    FETCH_CONFIG_TRANSLATION_SUCCESS
} from './../constants';
import reducer, { defaultState } from './../reducer';

const dateNow = Date.now();

describe('reducer', function () {
    it('should return the initial state', function () {
        expect(reducer(undefined, {})).toEqual(defaultState);
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
            expect(reducer(undefined, {
                type: CONFIG_CONTENT_ADD,
                data,
                receivedAt: dateNow
            })).toEqual({
                content
            });
        });
        it(`should react to an action with the type ${FETCH_CONFIG_CONTENT_REQUEST}`, function () {
            const content = {
                didInvalidate: false,
                isFetching: true
            };
            expect(reducer(undefined, {
                type: FETCH_CONFIG_CONTENT_REQUEST
            })).toEqual({
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
            expect(reducer(undefined, {
                type: FETCH_CONFIG_CONTENT_SUCCESS,
                data,
                receivedAt: dateNow
            })).toEqual({
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
            expect(reducer(undefined, {
                type: CONFIG_TRANSLATION_ADD,
                data,
                receivedAt: dateNow,
                locale
            })).toEqual(Object.assign({}, defaultState, {
                [locale]: actionData
            }));
        });
        it(`should react to an action with the type ${FETCH_CONFIG_TRANSLATION_REQUEST}`, function () {
            const actionData = {
                didInvalidate: false,
                isFetching: true
            };
            expect(reducer(undefined, {
                type: FETCH_CONFIG_TRANSLATION_REQUEST,
                locale
            })).toEqual(Object.assign({}, defaultState, {
                [locale]: actionData
            }));
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
            expect(reducer(undefined, {
                type: FETCH_CONFIG_TRANSLATION_SUCCESS,
                data,
                receivedAt: dateNow,
                locale
            })).toEqual(Object.assign({}, defaultState, {
                [locale]: actionData
            }));
        });
    });
});
