/* eslint-disable func-names */
// @see https://github.com/reactjs/redux/blob/master/docs/recipes/WritingTests.md
import configureMockStore from 'redux-mock-store'; // eslint-disable-line import/no-extraneous-dependencies
import nock from 'nock'; // eslint-disable-line import/no-extraneous-dependencies
import thunk from 'redux-thunk';

import { host, port, url } from './../../../config/application';
import {
    CONFIG_CONTENT_ADD,
    CONFIG_TRANSLATION_ADD,
    FETCH_CONFIG_CONTENT_REQUEST,
    FETCH_CONFIG_CONTENT_SUCCESS,
    FETCH_CONFIG_TRANSLATION_REQUEST,
    FETCH_CONFIG_TRANSLATION_SUCCESS
} from './../constants';
import {
    addConfigContent,
    addConfigTranslation,
    fetchConfigContentIfNeeded,
    fetchConfigTranslationIfNeeded
} from './../actions';

const mockStore = configureMockStore([thunk]);
Date.now = jest.genMockFunction().mockReturnValue(1234567890);

describe('actions', function () {
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
    describe('fetchConfigContentIfNeeded', function () {
        afterEach(function () {
            nock.cleanAll();
        });

        it(`should create ${FETCH_CONFIG_CONTENT_SUCCESS} when fetching content has been done`, function () {
            const data = {
                body: {
                    foo: 'bar',
                    bar: ['foo']
                }
            };
            nock(`http://${host}:${port}`)
                .get(`${url.api}${url.apiConfigContent}`)
                .reply(200, data);

            const expectedActions = [
                { type: FETCH_CONFIG_CONTENT_REQUEST },
                { type: FETCH_CONFIG_CONTENT_SUCCESS, data, receivedAt: Date.now() }
            ];
            const store = mockStore({ config: null });

            return store.dispatch(fetchConfigContentIfNeeded()).then(function () {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });
    describe('fetchConfigTranslationIfNeeded', function () {
        afterEach(function () {
            nock.cleanAll();
        });

        it(`should create ${FETCH_CONFIG_TRANSLATION_SUCCESS} when fetching translation has been done`, function () {
            const data = {
                body: {
                    foo: 'bar',
                    bar: ['foo']
                }
            };
            const locale = 'en-en';
            nock(`http://${host}:${port}`)
                .get(`${url.api}${url.apiConfigEnEn}`)
                .reply(200, data);

            const expectedActions = [
                { type: FETCH_CONFIG_TRANSLATION_REQUEST, locale },
                { type: FETCH_CONFIG_TRANSLATION_SUCCESS, data, receivedAt: Date.now(), locale }
            ];
            const store = mockStore({ config: null });

            return store.dispatch(fetchConfigTranslationIfNeeded('en-EN')).then(function () {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });
});
