/* eslint-disable func-names */
import {
    changeSearchTerm,
    initialState,
    SEARCH_CHANGE_TERM,
    SEARCH_RESOURCE_NAME,
    reducerSearch,
    reducer
} from '../duck';

describe('changeSearchTerm', function () {
    it(`should have a type of ${SEARCH_CHANGE_TERM}`, function () {
        expect(changeSearchTerm().type).toEqual(SEARCH_CHANGE_TERM);
    });
    it('should pass on the isHeaderFixed value we pass in', function () {
        const term = 'foo';
        expect(changeSearchTerm(term).term).toEqual(
            term
        );
    });
});

describe('reducer', function () {
    it('should return the initial state', function () {
        expect(reducer(undefined, {})).toEqual(initialState);
    });
    it(`should react to an action with the type ${SEARCH_CHANGE_TERM}`, function () {
        expect(
            reducer(undefined, {
                type: SEARCH_CHANGE_TERM,
                term: 'foo'
            })
        ).toMatchSnapshot();
    });
    it(`should return the current state if ${SEARCH_CHANGE_TERM} payload is empty`, function () {
        expect(
            reducer(undefined, {
                type: SEARCH_CHANGE_TERM
            })
        ).toMatchSnapshot();
    });
});

describe('reducerSearch', function () {
    it(`should have a key of ${SEARCH_RESOURCE_NAME}`, function () {
        expect(reducerSearch).toEqual(
            expect.objectContaining({
                [SEARCH_RESOURCE_NAME]: reducer
            })
        );
    });
});
