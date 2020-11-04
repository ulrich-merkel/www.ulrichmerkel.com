/* eslint-disable func-names */
import { selectStateScrollHeaderFixed, selectStateScrollHeaderVisible } from '../selector';
import { defaultState } from '../reducer';

describe('common/state/scroll/selector', function () {
    describe('selectStateScrollHeaderFixed', function () {
        it('should return the correct state', function () {
            const state = {
                scroll: {
                    headerFixed: true
                }
            };
            expect(selectStateScrollHeaderFixed(state)).toEqual(state.scroll.headerFixed);
        });
        it('should return a boolean if state isn\'t found', function () {
            const state = {
                super: {
                    dummy: 'ipsum'
                }
            };
            expect(selectStateScrollHeaderFixed(state)).toEqual(defaultState.headerFixed);
        });
    });
    describe('selectStateScrollHeaderVisible', function () {
        it('should return the correct state', function () {
            const state = {
                scroll: {
                    headerVisible: true
                }
            };
            expect(selectStateScrollHeaderVisible(state)).toEqual(state.scroll.headerVisible);
        });
        it('should return a boolean if state isn\'t found', function () {
            const state = {
                dummy: {
                    test: 'ipsum'
                }
            };
            expect(selectStateScrollHeaderVisible(state)).toEqual(defaultState.headerVisible);
        });
    });
});
