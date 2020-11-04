/* eslint-disable func-names */
import { selectStateContact } from '../selector';

describe('common/state/contact/selector', function () {
    describe('selectStateContact', function () {
        it('should return the correct state', function () {
            const state = {
                contact: {
                    name: 'name',
                    email: 'email',
                    website: 'website',
                    subject: 'subject',
                    message: 'message',
                    namePristine: false,
                    emailPristine: false,
                    subjectPristine: false,
                    messagePristine: false,
                    pending: false,
                    success: false,
                    error: false
                }
            };
            expect(selectStateContact(state)).toEqual(state.contact);
        });
        it("should return an empty object if state isn't found", function () {
            const state = {
                foo: {
                    bar: 'lorem'
                },
                bar: {
                    foo: 'ipsum'
                }
            };
            expect(selectStateContact(state)).toEqual({});
        });
    });
});
