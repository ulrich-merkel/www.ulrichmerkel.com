import {
    INITIAL_STATE,
    CHANGE_CONTACT_FORM,
    CONTACT_RESOURCE_NAME
} from '../constants';
import { changeContactForm, reducerContact, reducer } from '../duck';

describe('changeContactForm', function fnDescribe() {
    it(`should have a type of ${CHANGE_CONTACT_FORM}`, function fnIt() {
        expect(changeContactForm().type).toEqual(CHANGE_CONTACT_FORM);
    });
    it('should pass on the isHeaderFixed value we pass in', function fnIt() {
        const form = 'foo';
        expect(changeContactForm(form).form).toEqual(form);
    });
});

describe('reducer', function fnDescribe() {
    it('should return the initial state', function fnIt() {
        expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
    });
    it(`should react to an action with the type ${CHANGE_CONTACT_FORM}`, function fnIt() {
        expect(
            reducer(undefined, {
                type: CHANGE_CONTACT_FORM,
                form: 'foo'
            })
        ).toMatchSnapshot();
    });
    it(`should return the current state if ${CHANGE_CONTACT_FORM} payload is empty`, function fnIt() {
        expect(
            reducer(undefined, {
                type: CHANGE_CONTACT_FORM
            })
        ).toMatchSnapshot();
    });
});

describe('reducerContact', function fnDescribe() {
    it(`should have a key of ${CONTACT_RESOURCE_NAME}`, function fnIt() {
        expect(reducerContact).toEqual(
            expect.objectContaining({
                [CONTACT_RESOURCE_NAME]: reducer
            })
        );
    });
});
