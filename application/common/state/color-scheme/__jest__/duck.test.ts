/* eslint-disable func-names */
import {
    AVAILABLE_COLOR_SCHEMES,
    changeThemeSelected,
    initialState,
    reducer,
    COLOR_SCHEME_RESOURCE_NAME,
    COLOR_SCHEME_CHANGE_SELECTED,
    reducerColorScheme
} from '../duck';

describe('changeThemeSelected', function () {
    it(`should have a type of ${COLOR_SCHEME_CHANGE_SELECTED}`, function () {
        expect(changeThemeSelected().type).toEqual(COLOR_SCHEME_CHANGE_SELECTED);
    });
    it('should pass on the locale value we pass in', function () {
        const selected = AVAILABLE_COLOR_SCHEMES[1];
        expect(changeThemeSelected(selected).selected).toEqual(selected);
    });
});

describe('reducer', function () {
    it('should return the initial state', function () {
        expect(reducer(undefined, {})).toEqual(initialState);
    });
    it(`should react to an action with the type ${COLOR_SCHEME_CHANGE_SELECTED}`, function () {
        expect(
            reducer(undefined, {
                type: COLOR_SCHEME_CHANGE_SELECTED,
                selected: AVAILABLE_COLOR_SCHEMES[1]
            })
        ).toMatchSnapshot();
    });
    it('should return the current state if payload is empty', function () {
        expect(
            reducer(initialState, {
                type: COLOR_SCHEME_CHANGE_SELECTED
            })
        ).toMatchSnapshot();
    });
});

describe('reducerColorScheme', function () {
    it(`should have a key of ${COLOR_SCHEME_RESOURCE_NAME}`, function () {
        expect(reducerColorScheme).toEqual(
            expect.objectContaining({
                [COLOR_SCHEME_RESOURCE_NAME]: reducer
            })
        );
    });
});
