/* eslint-disable func-names*/
/* global describe, it, expect */
import { SCROLL_HEADER_FIXED, SCROLL_HEADER_VISIBLE } from './../constants';
import { changeHeaderFixed, changeHeaderVisible } from './../actions';

describe('actions', function () {
    describe('changeHeaderFixed', function () {
        it(`should have a type of ${SCROLL_HEADER_FIXED}`, function () {
            expect(changeHeaderFixed().type).toEqual(SCROLL_HEADER_FIXED);
        });
        it('should pass on the headerFixed value we pass in', function () {
            var headerFixed = false;
            expect(changeHeaderFixed(headerFixed).headerFixed).toEqual(headerFixed);
        });
    });
    describe('changeHeaderVisible', function () {
        it(`should have a type of ${SCROLL_HEADER_VISIBLE}`, function () {
            expect(changeHeaderVisible().type).toEqual(SCROLL_HEADER_VISIBLE);
        });
        it('should pass on the headerVisible value we pass in', function () {
            var headerVisible = false;
            expect(changeHeaderVisible(headerVisible).headerVisible).toEqual(headerVisible);
        });
    });
});
