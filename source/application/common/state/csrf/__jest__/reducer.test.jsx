/* eslint-disable func-names*/
/* global describe, it, expect */
import { ADD_CSRF_TOKEN } from './../constants';
import reducer, { defaultState } from './../reducer';

describe('reducer', function () {
    it('should return the initial state', function () {
        expect(reducer(undefined, {})).toEqual(defaultState);
    });
    it(`should react to an action with the type ${ADD_CSRF_TOKEN}`, function () {
        const token = 'lorem';
        expect(reducer(undefined, {
            type: ADD_CSRF_TOKEN,
            token: token
        })).toEqual({
            token: token
        });
    });
    it('should return the current state if payload is empty', function () {
        expect(reducer(defaultState, {
            type: ADD_CSRF_TOKEN
        })).toEqual(defaultState);
    });
});
