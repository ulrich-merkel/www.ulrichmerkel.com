/* eslint-disable func-names*/
/* global describe, it, expect */
import { SCROLL_HEADER_FIXED, SCROLL_HEADER_VISIBLE } from './../constants';
import reducer, { defaultState } from './../reducer';

describe('reducer', function () {
    it('should return the initial state', function () {
        expect(reducer(undefined, {})).toEqual(defaultState);
    });
    it(`should react to an action with the type ${SCROLL_HEADER_FIXED}`, function () {
        expect(reducer(undefined, {
            type: SCROLL_HEADER_FIXED,
            headerFixed: true
        })).toEqual({
            headerFixed: true,
            headerVisible: true
        });
    });
    it(`should return the current state if ${SCROLL_HEADER_FIXED} payload is empty`, function () {
        expect(reducer(defaultState, {
            type: SCROLL_HEADER_FIXED
        })).toEqual(defaultState);
    });
    it(`should react to an action with the type ${SCROLL_HEADER_VISIBLE}`, function () {
        expect(reducer(undefined, {
            type: SCROLL_HEADER_VISIBLE,
            headerVisible: false
        })).toEqual({
            headerFixed: false,
            headerVisible: false
        });
    });
    // it(`should return the current state if ${SCROLL_HEADER_VISIBLE} payload is empty`, function () {
    //     expect(reducer(defaultState, {
    //         type: SCROLL_HEADER_VISIBLE
    //     })).toEqual(defaultState);
    // });
});
