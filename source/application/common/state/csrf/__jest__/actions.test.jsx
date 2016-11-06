/* eslint-disable func-names*/
/* global describe, it, expect */
import { ADD_CSRF_TOKEN } from './../constants';
import { addToken } from './../actions';

describe('actions', function () {
    describe('changeSearchTerm', function () {
        it(`should have a type of ${ADD_CSRF_TOKEN}`, function () {
            expect(addToken().type).toEqual(ADD_CSRF_TOKEN);
        });
        it('should pass on the term value we pass in', function () {
            const token = 'AsD12kjasdkJä?h';
            expect(addToken(token).token).toEqual(token);
        });
    });
});
