import {
    AVAILABLE_COLOR_SCHEMES,
    INITIAL_STATE,
    COLOR_SCHEME_RESOURCE_NAME,
    COLOR_SCHEME_TOGGLE_SELECTED,
    COLOR_SCHEME_TOGGLE_SELECTED_SAGA
} from '../constants';
import {
    toggleColorSchemeSelected,
    reducer,
    reducerColorScheme,
    toggleSelected
} from '../duck';

const { DARK, LIGHT } = AVAILABLE_COLOR_SCHEMES;

describe('toggleSelected', function fnDescribe() {
    it('should return the correct result', function fnIt() {
        expect(toggleSelected(LIGHT)).toEqual(DARK);
        expect(toggleSelected(DARK)).toEqual(LIGHT);
    });
});

describe('toggleColorSchemeSelected', function fnDescribe() {
    it(`should have a type of ${COLOR_SCHEME_TOGGLE_SELECTED_SAGA}`, function fnIt() {
        expect(toggleColorSchemeSelected().type).toEqual(
            COLOR_SCHEME_TOGGLE_SELECTED_SAGA
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
                type: COLOR_SCHEME_TOGGLE_SELECTED
            })
        ).toMatchSnapshot();
    });
    it(`should toggle to ${DARK}`, function fnIt() {
        expect(
            reducer(
                {
                    ...INITIAL_STATE,
                    payload: {
                        selected: LIGHT
                    }
                },
                {
                    type: COLOR_SCHEME_TOGGLE_SELECTED
                }
            )
        ).toMatchSnapshot();
    });
    it(`should toggle to ${LIGHT}`, function fnIt() {
        expect(
            reducer(
                {
                    ...INITIAL_STATE,
                    payload: {
                        selected: DARK
                    }
                },
                {
                    type: COLOR_SCHEME_TOGGLE_SELECTED
                }
            )
        ).toMatchSnapshot();
    });
    it('should return the current state if payload is empty', function fnIt() {
        expect(
            reducer(INITIAL_STATE, {
                type: COLOR_SCHEME_TOGGLE_SELECTED
            })
        ).toMatchSnapshot();
    });
});

describe('reducerColorScheme', function fnDescribe() {
    it(`should have a key of ${COLOR_SCHEME_RESOURCE_NAME}`, function fnIt() {
        expect(reducerColorScheme).toEqual(
            expect.objectContaining({
                [COLOR_SCHEME_RESOURCE_NAME]: reducer
            })
        );
    });
});
