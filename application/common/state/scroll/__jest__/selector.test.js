/* eslint-disable func-names */
import {
    selectStateScrollIsHeaderFixed,
    selectStateScrollIsHeaderVisible
} from '../selector';
import { initialState, SCROLL_RESOURCE_NAME } from '../duck';

describe('selectStateScrollIsHeaderFixed', function () {
    it('should return the correct state', function () {
        const state = {
            [SCROLL_RESOURCE_NAME]: {
                payload: {
                    headerFixed: true
                }
            }
        };
        expect(selectStateScrollIsHeaderFixed(state)).toEqual(
            state.scroll.payload.headerFixed
        );
    });
    it("should return a boolean if state isn't found", function () {
        const state = {
            super: {
                dummy: 'ipsum'
            }
        };
        expect(selectStateScrollIsHeaderFixed(state)).toEqual(
            initialState.payload.headerFixed
        );
    });
});

describe('selectStateScrollIsHeaderVisible', function () {
    it('should return the correct state', function () {
        const state = {
            [SCROLL_RESOURCE_NAME]: {
                payload: {
                    headerVisible: true
                }
            }
        };
        expect(selectStateScrollIsHeaderVisible(state)).toEqual(
            state.scroll.payload.headerVisible
        );
    });
    it("should return a boolean if state isn't found", function () {
        const state = {
            dummy: {
                test: 'ipsum'
            }
        };
        expect(selectStateScrollIsHeaderVisible(state)).toEqual(
            initialState.payload.headerVisible
        );
    });
});
