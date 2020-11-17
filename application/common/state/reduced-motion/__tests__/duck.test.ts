/* eslint-disable func-names */
import {
    MOTION_PREFERENCES,
    toggleReducedMotionSelected,
    initialState,
    reducer,
    REDUCED_MOTION_RESOURCE_NAME,
    REDUCED_MOTION_TOGGLE_SELECTED,
    reducerReducedMotion
} from '../duck';

describe('toggleReducedMotionSelected', function () {
    it(`should have a type of ${REDUCED_MOTION_TOGGLE_SELECTED}`, function () {
        expect(toggleReducedMotionSelected().type).toEqual(
            REDUCED_MOTION_TOGGLE_SELECTED
        );
    });
});

describe('reducer', function () {
    it('should return the initial state', function () {
        expect(reducer(undefined, {})).toEqual(initialState);
    });
    it(`should react to an action with the type ${REDUCED_MOTION_TOGGLE_SELECTED}`, function () {
        expect(
            reducer(undefined, {
                type: REDUCED_MOTION_TOGGLE_SELECTED,
                selected: MOTION_PREFERENCES[1]
            })
        ).toMatchSnapshot();
    });
    it('should return the current state if payload is empty', function () {
        expect(
            reducer(initialState, {
                type: REDUCED_MOTION_TOGGLE_SELECTED
            })
        ).toMatchSnapshot();
    });
});

describe('reducerReducedMotion', function () {
    it(`should have a key of ${REDUCED_MOTION_RESOURCE_NAME}`, function () {
        expect(reducerReducedMotion).toEqual(
            expect.objectContaining({
                [REDUCED_MOTION_RESOURCE_NAME]: reducer
            })
        );
    });
});
