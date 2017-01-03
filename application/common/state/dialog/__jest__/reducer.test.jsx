/* eslint-disable func-names */
import { DIALOG_CHANGE_VISIBLE } from './../constants';
import reducer, { defaultState } from './../reducer';

describe('common/state/dialog/reducer', function () {
    it('should return the initial state', function () {
        expect(reducer(undefined, {})).toEqual(defaultState);
    });
    it(`should react to an action with the type ${DIALOG_CHANGE_VISIBLE}`, function () {
        expect(reducer(undefined, {
            type: DIALOG_CHANGE_VISIBLE,
            visible: true
        })).toEqual({
            visible: true
        });
    });
    it('should return the current state if payload is empty', function () {
        const state = {
            visible: false
        };
        expect(reducer(state, {
            type: DIALOG_CHANGE_VISIBLE
        })).toEqual(state);
    });
});
