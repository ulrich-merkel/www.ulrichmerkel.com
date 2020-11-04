/* eslint-disable func-names */
import {
    STATE_THEME_DEFAULT_STATE,
    STATE_THEME_SELECTED_CHANGE
} from '../constants';
import reducer from '../reducer';

describe('common/state/theme/reducer', function () {
    it('should return the initial state', function () {
        expect(reducer(undefined, {})).toEqual(STATE_THEME_DEFAULT_STATE);
    });
    it(`should react to an action with the type ${STATE_THEME_SELECTED_CHANGE}`, function () {
        expect(
            reducer(undefined, {
                type: STATE_THEME_SELECTED_CHANGE,
                selected: true
            })
        ).toEqual({
            selected: true
        });
    });
    it('should return the current state if payload is empty', function () {
        const state = {
            foo: false
        };
        expect(
            reducer(state, {
                type: STATE_THEME_SELECTED_CHANGE
            })
        ).toEqual(state);
    });
});
