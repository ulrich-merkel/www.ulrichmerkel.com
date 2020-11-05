/* eslint-disable func-names */
import {
    selectStateColorScheme,
    selectStateColorSchemeSelected
} from '../selector';
import { initialState, COLOR_SCHEME_RESOURCE_NAME } from '../duck';

describe('selectStateColorScheme', function () {
    it('should return the correct state', function () {
        const state = {
            [COLOR_SCHEME_RESOURCE_NAME]: {
                payload: {
                    locale: 'en-EN'
                }
            }
        };
        expect(selectStateColorScheme(state)).toEqual(
            state[COLOR_SCHEME_RESOURCE_NAME]
        );
    });
    it('should return the initial state if resource key is not found', function () {
        const state = {
            foo: {
                bar: 'lorem'
            }
        };
        expect(selectStateColorScheme(state)).toEqual(initialState);
    });
    it('should return the initial state if no state is found', function () {
        expect(selectStateColorScheme()).toEqual(initialState);
    });
});

describe('selectStateColorSchemeSelected', function () {
    it('should return the correct state', function () {
        const state = {
            [COLOR_SCHEME_RESOURCE_NAME]: {
                payload: {
                    selected: 'dark'
                }
            }
        };
        expect(selectStateColorSchemeSelected(state)).toEqual(
            state[COLOR_SCHEME_RESOURCE_NAME].payload.selected
        );
    });
    it("should return the default if state isn't found", function () {
        const state = {
            foo: {
                bar: 'lorem'
            }
        };
        expect(selectStateColorSchemeSelected(state)).toEqual(
            initialState.payload.selected
        );
    });
});
