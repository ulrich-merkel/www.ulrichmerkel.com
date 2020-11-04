/* eslint-disable func-names */
import { selectStateScrollHeaderFixed, selectStateScrollHeaderVisible } from '../selector';
import { initialState, SCROLL_RESOURCE_NAME } from '../duck';

describe('selectStateScrollHeaderFixed', function () {
    it('should return the correct state', function () {
        const state = {
            [SCROLL_RESOURCE_NAME]: {
                payload: {
                    headerFixed: true
                }
            }
        };
        expect(selectStateScrollHeaderFixed(state)).toEqual(state.scroll.payload.headerFixed);
    });
    it('should return a boolean if state isn\'t found', function () {
        const state = {
            super: {
                dummy: 'ipsum'
            }
        };
        expect(selectStateScrollHeaderFixed(state)).toEqual(initialState.payload.headerFixed);
    });
});

describe('selectStateScrollHeaderVisible', function () {
    it('should return the correct state', function () {
        const state = {
            [SCROLL_RESOURCE_NAME]: {
                payload: {
                    headerVisible: true
                }
            }
        };
        expect(selectStateScrollHeaderVisible(state)).toEqual(state.scroll.payload.headerVisible);
    });
    it('should return a boolean if state isn\'t found', function () {
        const state = {
            dummy: {
                test: 'ipsum'
            }
        };
        expect(selectStateScrollHeaderVisible(state)).toEqual(initialState.payload.headerVisible);
    });
});
