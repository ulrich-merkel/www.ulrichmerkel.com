/* eslint-disable func-names*/
/* global describe, it, expect */
import constants from './../constants';
import reducer, { defaultState } from './../reducer';

describe('reducer', function () {
    it('should return the initial state', function () {
        expect(reducer(undefined, {})).toEqual(defaultState);
    });
    it('should react to an action with the type "CONTACT_CHANGE"', function () {
        var contact = {
            name: 'lorem',
            email: 'ipsum'
        };
        expect(reducer(undefined, {
            type: constants.CONTACT_CHANGE,
            contact: contact
        })).toEqual(contact);
    });
    it('should return the current state if payload is empty', function () {
        var state = {
            name: 'lorem',
            email: 'ipsum'
        };
        expect(reducer(state, {
            type: constants.CONTACT_CHANGE
        })).toEqual(state);
    });
});
