/* eslint-disable func-names */
import {
    addPageView,
    initialState,
    reducer,
    PAGE_RESOURCE_NAME,
    PAGE_INCREASE_VIEWS,
    reducerPage
} from '../duck';

describe('addPageView', function () {
    it(`should have a type of ${PAGE_INCREASE_VIEWS}`, function () {
        expect(addPageView().type).toEqual(PAGE_INCREASE_VIEWS);
    });
});

describe('reducer', function () {
    it('should return the initial state', function () {
        expect(reducer(undefined, {})).toEqual(initialState);
    });
    it(`should react to an action with the type ${PAGE_INCREASE_VIEWS}`, function () {
        expect(
            reducer(undefined, {
                type: PAGE_INCREASE_VIEWS
            })
        ).toMatchSnapshot();
    });
});

describe('reducerPage', function () {
    it(`should have a key of ${PAGE_RESOURCE_NAME}`, function () {
        expect(reducerPage).toEqual(
            expect.objectContaining({
                [PAGE_RESOURCE_NAME]: reducer
            })
        );
    });
});
