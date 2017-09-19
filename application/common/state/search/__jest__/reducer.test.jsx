/* eslint-disable func-names */
import { SEARCH_CHANGE_TERM } from '../constants';
import reducer, { defaultState } from '../reducer';

describe('common/state/search/reducer', function () {
    it('should return the initial state', function () {
        expect(reducer(undefined, {})).toEqual(defaultState);
    });
    it(`should react to an action with the type ${SEARCH_CHANGE_TERM}`, function () {
        const term = 'lorem';
        expect(reducer(undefined, {
            type: SEARCH_CHANGE_TERM,
            term
        })).toEqual({
            term
        });
    });
});
