/* eslint-disable func-names*/
/* global describe, it, expect */
import { PAGE_INCREASE_VIEWS } from './../constants';
import { addPageView } from './../actions';

describe('actions', function () {
    describe('addPageView', function () {
        it(`should have a type of ${PAGE_INCREASE_VIEWS}`, function () {
            expect(addPageView().type).toEqual(PAGE_INCREASE_VIEWS);
        });
        it('should pass on the increase value we pass in', function () {
            const increase = 'increase';
            expect(addPageView(increase).increase).toEqual(increase);
        });
    });
});
