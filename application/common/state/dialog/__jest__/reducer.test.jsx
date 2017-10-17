/* eslint-disable func-names */
import { STATE_DIALOG_VISIBLE_CHANGE, STATE_DIALOG_PAGE_BROADCAST } from '../constants';
import reducer, { defaultState } from '../reducer';

describe('common/state/dialog/reducer', function () {
    it('should return the initial state', function () {
        expect(reducer(undefined, {})).toEqual(defaultState);
    });
    it(`should react to an action with the type ${STATE_DIALOG_VISIBLE_CHANGE}`, function () {
        expect(reducer(undefined, {
            type: STATE_DIALOG_VISIBLE_CHANGE,
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
            type: STATE_DIALOG_VISIBLE_CHANGE
        })).toEqual(state);
    });
    it('should return the current state if page is set', function () {
        expect(reducer(undefined, {
            type: STATE_DIALOG_VISIBLE_CHANGE,
            visible: true,
            page: STATE_DIALOG_PAGE_BROADCAST
        })).toEqual({
            visible: true,
            page: STATE_DIALOG_PAGE_BROADCAST
        });
    });
});
