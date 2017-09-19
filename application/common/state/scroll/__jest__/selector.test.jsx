/* eslint-disable func-names */
import { selectStateScrollHeaderFixed, selectStateScrollHeaderVisible } from '../selector';
import { defaultState } from '../reducer';

describe('common/state/scroll/selector', function () {
    describe('selectStateScrollHeaderFixed', function () {
        it('should return the correct state', function () {
            const state = Object.assign({}, {
                scroll: {
                    headerFixed: true
                }
            });
            expect(selectStateScrollHeaderFixed(state)).toEqual(state.scroll.headerFixed);
        });
        it('should return a boolean if state isn\'t found', function () {
            const state = Object.assign({}, {
                super: {
                    dummy: 'ipsum'
                }
            });
            expect(selectStateScrollHeaderFixed(state)).toEqual(defaultState.headerFixed);
        });
    });
    describe('selectStateScrollHeaderVisible', function () {
        it('should return the correct state', function () {
            const state = Object.assign({}, {
                scroll: {
                    headerVisible: true
                }
            });
            expect(selectStateScrollHeaderVisible(state)).toEqual(state.scroll.headerVisible);
        });
        it('should return a boolean if state isn\'t found', function () {
            const state = Object.assign({}, {
                dummy: {
                    test: 'ipsum'
                }
            });
            expect(selectStateScrollHeaderVisible(state)).toEqual(defaultState.headerVisible);
        });
    });
});
