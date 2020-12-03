import {
    AVAILABLE_MOTION_PREFERENCES,
    toggleReducedMotionSelected,
    initialState,
    reducer,
    REDUCED_MOTION_RESOURCE_NAME,
    REDUCED_MOTION_TOGGLE_SELECTED,
    reducerReducedMotion
} from '../duck';

describe('toggleReducedMotionSelected', function fnDescribe() {
    it(`should have a type of ${REDUCED_MOTION_TOGGLE_SELECTED}`, function fnIt() {
        expect(toggleReducedMotionSelected().type).toEqual(
            REDUCED_MOTION_TOGGLE_SELECTED
        );
    });
});

describe('reducer', function fnDescribe() {
    it('should return the initial state', function fnIt() {
        expect(reducer(undefined, {})).toEqual(initialState);
    });
    it(`should react to an action with the type ${REDUCED_MOTION_TOGGLE_SELECTED}`, function fnIt() {
        expect(
            reducer(undefined, {
                type: REDUCED_MOTION_TOGGLE_SELECTED,
                selected: AVAILABLE_MOTION_PREFERENCES.REDUCE
            })
        ).toMatchSnapshot();
    });
    it('should return the current state if payload is empty', function fnIt() {
        expect(
            reducer(initialState, {
                type: REDUCED_MOTION_TOGGLE_SELECTED
            })
        ).toMatchSnapshot();
    });
});

describe('reducerReducedMotion', function fnDescribe() {
    it(`should have a key of ${REDUCED_MOTION_RESOURCE_NAME}`, function fnIt() {
        expect(reducerReducedMotion).toEqual(
            expect.objectContaining({
                [REDUCED_MOTION_RESOURCE_NAME]: reducer
            })
        );
    });
});
