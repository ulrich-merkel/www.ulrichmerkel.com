/* eslint-disable func-names, immutable/no-mutation */
// @see https://github.com/reactjs/redux/blob/master/docs/recipes/WritingTests.md
// import configureMockStore from 'redux-mock-store'; // eslint-disable-line import/no-extraneous-dependencies
// import nock from 'nock'; // eslint-disable-line import/no-extraneous-dependencies
// import thunk from 'redux-thunk';

// import { host, port, url } from '../../../config/application';
import {
    CONFIG_CONTENT_ADD,
    CONFIG_TRANSLATION_ADD
    // FETCH_CONFIG_CONTENT_REQUEST,
    // FETCH_CONFIG_CONTENT_SUCCESS,
    // FETCH_CONFIG_TRANSLATION_REQUEST,
    // FETCH_CONFIG_TRANSLATION_SUCCESS
} from '../constants';
import {
    addConfigContent,
    initialState,
    reducer,
    addConfigTranslation
    // fetchConfigContentIfNeeded,
    // fetchConfigTranslationIfNeeded
} from '../duck';

// const mockStore = configureMockStore([thunk]);
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

// @TODO Check response after jest and nock update
// describe('fetchConfigContentIfNeeded', function () {
//     afterEach(function () {
//         nock.cleanAll();
//     });

//     it(`should create ${FETCH_CONFIG_CONTENT_SUCCESS} when fetching content has been done`, function () {
//         const data = {
//             body: {
//                 foo: 'bar',
//                 bar: ['foo']
//             }
//         };
//         nock(`http://${host}:${port}`)
//             .get(`${url.api}${url.apiConfigContent}`)
//             .reply(200, data);

//         const expectedActions = [
//             { type: FETCH_CONFIG_CONTENT_REQUEST },
//             { type: FETCH_CONFIG_CONTENT_SUCCESS, data, receivedAt: Date.now() }
//         ];
//         const store = mockStore({ config: null });

//         return store.dispatch(fetchConfigContentIfNeeded()).then(function () {
//             return expect(store.getActions()).toEqual(expectedActions);
//         });
//     });
// });
// describe('fetchConfigTranslationIfNeeded', function () {
//     afterEach(function () {
//         nock.cleanAll();
//     });

//     it(`should create ${FETCH_CONFIG_TRANSLATION_SUCCESS} when fetching translation has been done`, function () {
//         const data = {
//             body: {
//                 foo: 'bar',
//                 bar: ['foo']
//             }
//         };
//         const locale = 'en-en';
//         nock(`http://${host}:${port}`)
//             .get(`${url.api}${url.apiConfigEnEn}`)
//             .reply(200, data);

//         const expectedActions = [
//             { type: FETCH_CONFIG_TRANSLATION_REQUEST, locale },
//             { type: FETCH_CONFIG_TRANSLATION_SUCCESS, data, receivedAt: Date.now(), locale }
//         ];
//         const store = mockStore({ config: null });

//         return store.dispatch(fetchConfigTranslationIfNeeded('en-EN')).then(function () {
//             return expect(store.getActions()).toEqual(expectedActions);
//         });
//     });
// });

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
