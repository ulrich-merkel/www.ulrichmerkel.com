import {
    AVAILABLE_MOTION_PREFERENCES,
    INITIAL_STATE,
    REDUCED_MOTION_RESOURCE_NAME,
    REDUCED_MOTION_TOGGLE_SELECTED,
    REDUCED_MOTION_TOGGLE_SELECTED_SAGA
} from '../constants';
import {
    reducer,
    reducerReducedMotion,
    toggleReducedMotionSelected,
    toggleSelected
} from '../duck';

const { NO_PREFERENCE, REDUCE } = AVAILABLE_MOTION_PREFERENCES;

describe('toggleSelected', function fnDescribe() {
    it('should return the correct result', function fnIt() {
        expect(toggleSelected(NO_PREFERENCE)).toEqual(REDUCE);
        expect(toggleSelected(REDUCE)).toEqual(NO_PREFERENCE);
    });
});

describe('toggleReducedMotionSelected', function fnDescribe() {
    it(`should have a type of ${REDUCED_MOTION_TOGGLE_SELECTED_SAGA}`, function fnIt() {
        expect(toggleReducedMotionSelected().type).toEqual(
            REDUCED_MOTION_TOGGLE_SELECTED_SAGA
        );
    });
});

describe('reducer', function fnDescribe() {
    it('should return the initial state', function fnIt() {
        expect(
            reducer(undefined, {
                type: ''
            })
        ).toEqual(INITIAL_STATE);
    });
    it(`should should toggle with system settings`, function fnIt() {
        expect(
            reducer(INITIAL_STATE, {
                type: REDUCED_MOTION_TOGGLE_SELECTED
            })
        ).toMatchSnapshot();
    });
    it(`should should toggle to ${REDUCE}`, function fnIt() {
        expect(
            reducer(
                {
                    ...INITIAL_STATE,
                    payload: {
                        selected: NO_PREFERENCE
                    }
                },
                {
                    type: REDUCED_MOTION_TOGGLE_SELECTED,
                    selected: NO_PREFERENCE
                }
            )
        ).toMatchSnapshot();
    });
    it(`should should toggle to ${NO_PREFERENCE}`, function fnIt() {
        expect(
            reducer(
                {
                    ...INITIAL_STATE,
                    payload: {
                        selected: REDUCE
                    }
                },
                {
                    type: REDUCED_MOTION_TOGGLE_SELECTED,
                    selected: REDUCE
                }
            )
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
