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
                    isHeaderFixed: true
                }
            }
        };
        expect(selectStateScrollIsHeaderFixed(state)).toEqual(
            state[SCROLL_RESOURCE_NAME].payload.isHeaderFixed
        );
    });
    it("should return a boolean if state isn't found", function () {
        const state = {
            super: {
                dummy: 'ipsum'
            }
        };
        expect(selectStateScrollIsHeaderFixed(state)).toEqual(
            initialState.payload.isHeaderFixed
        );
    });
});

describe('selectStateScrollIsHeaderVisible', function () {
    it('should return the correct state', function () {
        const state = {
            [SCROLL_RESOURCE_NAME]: {
                payload: {
                    isHeaderVisible: true
                }
            }
        };
        expect(selectStateScrollIsHeaderVisible(state)).toEqual(
            state[SCROLL_RESOURCE_NAME].payload.isHeaderVisible
        );
    });
    it("should return a boolean if state isn't found", function () {
        const state = {
            dummy: {
                test: 'ipsum'
            }
        };
        expect(selectStateScrollIsHeaderVisible(state)).toEqual(
            initialState.payload.isHeaderVisible
        );
    });
});
