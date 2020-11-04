/* eslint-disable func-names */
import { CONTACT_CHANGE } from '../constants';
import { changeContact } from '../actions';

describe('common/state/contact/actions', function () {
    describe('changeContact', function () {
        it(`should have a type of ${CONTACT_CHANGE}`, function () {
            expect(changeContact().type).toEqual(CONTACT_CHANGE);
        });

        it('should pass on the contact value we pass in', function () {
            const contact = 'Lorem ipsum';
            expect(changeContact(contact).contact).toEqual(contact);
        });
    });
});
