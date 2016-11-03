/* eslint-disable func-names*/
/* global describe, it, expect */
import constants from './../constants';
import { changeContact } from './../actions';

describe('actions', function () {
    describe('changeContact', function () {
        it(`should have a type of ${constants.CONTACT_CHANGE}`, function () {
            expect(changeContact().type).toEqual(constants.CONTACT_CHANGE);
        });
        it('should pass on the contact value we pass in', function () {
            var contact = 'Lorem ipsum';
            expect(changeContact(contact).contact).toEqual(contact);
        });
    });
});
