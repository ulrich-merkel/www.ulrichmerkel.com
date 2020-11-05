/* eslint-disable func-names */
import { selectStateContact, selectStateContactForm } from '../selector';
import { initialState, CONTACT_RESOURCE_NAME } from '../duck';

describe('selectStateContact', function () {
    it('should return the correct state', function () {
        const state = {
            [CONTACT_RESOURCE_NAME]: {
                payload: {
                    form: 'da39a3ee5e6b4b0d3255bfef95601890afd80709'
                }
            }
        };
        expect(selectStateContact(state)).toEqual(state[CONTACT_RESOURCE_NAME]);
    });
    it('should return the initial state if resource key is not found', function () {
        const state = {
            foo: {
                bar: 'lorem'
            }
        };
        expect(selectStateContact(state)).toEqual(initialState);
    });
    it('should return the initial state if no state is found', function () {
        expect(selectStateContact()).toEqual(initialState);
    });
});

describe('selectStateContactForm', function () {
    it('should return the correct state', function () {
        const state = {
            [CONTACT_RESOURCE_NAME]: {
                payload: {
                    form: 'da39a3ee5e6b4b0d3255bfef95601890afd80709'
                }
            }
        };
        expect(selectStateContactForm(state)).toEqual(
            state[CONTACT_RESOURCE_NAME].payload.form
        );
    });
    it("should return the default if state isn't found", function () {
        const state = {
            foo: {
                bar: 'lorem'
            }
        };
        expect(selectStateContactForm(state)).toEqual(
            initialState.payload.form
        );
    });
});
