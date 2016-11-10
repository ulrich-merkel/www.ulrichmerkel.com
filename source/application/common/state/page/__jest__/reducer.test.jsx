/* eslint-disable func-names */
import { PAGE_INCREASE_VIEWS } from './../constants';
import reducer, { defaultState } from './../reducer';

describe('reducer', function () {
    it('should return the initial state', function () {
        expect(reducer(undefined, {})).toEqual(defaultState);
    });
    it(`should react to an action with the type ${PAGE_INCREASE_VIEWS} and should increase viewsAfterReload on call`, function () {
        expect(reducer(defaultState, {
            type: PAGE_INCREASE_VIEWS
        })).toEqual({
            viewsAfterReload: 1
        });
    });
});
