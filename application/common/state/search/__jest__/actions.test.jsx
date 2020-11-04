/* eslint-disable func-names */
import { SEARCH_CHANGE_TERM } from '../constants';
import { changeSearchTerm } from '../actions';

describe('common/state/search/actions', function () {
    describe('changeSearchTerm', function () {
        it(`should have a type of ${SEARCH_CHANGE_TERM}`, function () {
            expect(changeSearchTerm().type).toEqual(SEARCH_CHANGE_TERM);
        });
        it('should pass on the term value we pass in', function () {
            const term = false;
            expect(changeSearchTerm(term).term).toEqual(term);
        });
    });
});
