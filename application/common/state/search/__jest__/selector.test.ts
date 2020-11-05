/* eslint-disable func-names */
import {
    selectStateSearch,
    selectStateSearchTerm
} from '../selector';
import { initialState, SEARCH_RESOURCE_NAME } from '../duck';

describe('selectStateSearch', function () {
    it('should return the correct state', function () {
        const state = {
            [SEARCH_RESOURCE_NAME]: {
                payload: {
                    locale: 'en-EN'
                }
            }
        };
        expect(selectStateSearch(state)).toEqual(
            state[SEARCH_RESOURCE_NAME]
        );
    });
    it("should return the initial state if resource key is not found", function () {
        const state = {
            foo: {
                bar: 'lorem'
            }
        };
        expect(selectStateSearch(state)).toEqual(
            initialState
        );
    });
    it("should return the initial state if no state is found", function () {
        expect(selectStateSearch()).toEqual(
            initialState
        );
    });
});

describe('selectStateSearchTerm', function () {
    it('should return the correct state', function () {
        const state = {
            [SEARCH_RESOURCE_NAME]: {
                payload: {
                    term: 'Hello?'
                }
            }
        };
        expect(selectStateSearchTerm(state)).toEqual(
            state[SEARCH_RESOURCE_NAME].payload.term
        );
    });
    it("should return the default availableLocales if state isn't found", function () {
        const state = {
            foo: {
                bar: 'lorem'
            }
        };
        expect(selectStateSearchTerm(state)).toEqual(
            initialState.payload.term
        );
    });
});
