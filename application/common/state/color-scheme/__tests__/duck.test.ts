import {
    AVAILABLE_COLOR_SCHEMES,
    toggleThemeSelected,
    initialState,
    reducer,
    COLOR_SCHEME_RESOURCE_NAME,
    COLOR_SCHEME_TOGGLE_SELECTED,
    reducerColorScheme
} from '../duck';

describe('toggleThemeSelected', function fnDescribe() {
    it(`should have a type of ${COLOR_SCHEME_TOGGLE_SELECTED}`, function fnIt() {
        expect(toggleThemeSelected().type).toEqual(
            COLOR_SCHEME_TOGGLE_SELECTED
        );
    });
});

describe('reducer', function fnDescribe() {
    it('should return the initial state', function fnIt() {
        expect(reducer(undefined, {})).toEqual(initialState);
    });
    it(`should react to an action with the type ${COLOR_SCHEME_TOGGLE_SELECTED}`, function fnIt() {
        expect(
            reducer(undefined, {
                type: COLOR_SCHEME_TOGGLE_SELECTED,
                selected: AVAILABLE_COLOR_SCHEMES[1]
            })
        ).toMatchSnapshot();
    });
    it('should return the current state if payload is empty', function fnIt() {
        expect(
            reducer(initialState, {
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
