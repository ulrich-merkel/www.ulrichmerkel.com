/* eslint-disable func-names */
import {
    changeContactForm,
    initialState,
    CHANGE_CONTACT_FORM,
    CONTACT_RESOURCE_NAME,
    reducerContact,
    reducer
} from '../duck';

describe('changeContactForm', function () {
    it(`should have a type of ${CHANGE_CONTACT_FORM}`, function () {
        expect(changeContactForm().type).toEqual(CHANGE_CONTACT_FORM);
    });
    it('should pass on the isHeaderFixed value we pass in', function () {
        const form = 'foo';
        expect(changeContactForm(form).form).toEqual(form);
    });
});

describe('reducer', function () {
    it('should return the initial state', function () {
        expect(reducer(undefined, {})).toEqual(initialState);
    });
    it(`should react to an action with the type ${CHANGE_CONTACT_FORM}`, function () {
        expect(
            reducer(undefined, {
                type: CHANGE_CONTACT_FORM,
                form: 'foo'
            })
        ).toMatchSnapshot();
    });
    it(`should return the current state if ${CHANGE_CONTACT_FORM} payload is empty`, function () {
        expect(
            reducer(undefined, {
                type: CHANGE_CONTACT_FORM
            })
        ).toMatchSnapshot();
    });
});

describe('reducerContact', function () {
    it(`should have a key of ${CONTACT_RESOURCE_NAME}`, function () {
        expect(reducerContact).toEqual(
            expect.objectContaining({
                [CONTACT_RESOURCE_NAME]: reducer
            })
        );
    });
});
