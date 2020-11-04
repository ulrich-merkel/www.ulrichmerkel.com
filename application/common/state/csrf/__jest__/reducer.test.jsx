/* eslint-disable func-names */
import { ADD_CSRF_TOKEN } from '../constants';
import reducer, { defaultState } from '../reducer';

describe('common/state/csrf/reducer', function () {
    it('should return the initial state', function () {
        expect(reducer(undefined, {})).toEqual(defaultState);
    });
    it(`should react to an action with the type ${ADD_CSRF_TOKEN}`, function () {
        const token = 'lorem';
        expect(
            reducer(undefined, {
                type: ADD_CSRF_TOKEN,
                token
            })
        ).toEqual({
            token
        });
    });
    it('should return the current state if payload is empty', function () {
        expect(
            reducer(defaultState, {
                type: ADD_CSRF_TOKEN
            })
        ).toEqual(defaultState);
    });
});
