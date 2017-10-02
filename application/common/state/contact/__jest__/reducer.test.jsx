/* eslint-disable func-names */
import { CONTACT_CHANGE } from '../constants';
import reducer, { defaultState } from '../reducer';

describe('common/state/contact/reducer', function () {

    it('should return the initial state', function () {
        expect(reducer(undefined, {})).toEqual(defaultState);
    });

    it(`should react to an action with the type ${CONTACT_CHANGE}`, function () {
        const contact = {
            name: 'lorem',
            email: 'ipsum'
        };
        expect(reducer(undefined, {
            type: CONTACT_CHANGE,
            contact
        })).toEqual(contact);
    });

    it('should return the current state if payload is empty', function () {
        const state = {
            name: 'lorem',
            email: 'ipsum'
        };
        expect(reducer(state, {
            type: CONTACT_CHANGE
        })).toEqual(state);
    });

});
