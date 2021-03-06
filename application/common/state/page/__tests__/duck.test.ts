import {
    INITIAL_STATE,
    PAGE_RESOURCE_NAME,
    PAGE_INCREASE_VIEWS
} from '../constants';
import { addPageView, reducer, reducerPage } from '../duck';

describe('addPageView', function fnDescribe() {
    it(`should have a type of ${PAGE_INCREASE_VIEWS}`, function fnIt() {
        expect(addPageView().type).toEqual(PAGE_INCREASE_VIEWS);
    });
});

describe('reducer', function fnDescribe() {
    it('should return the initial state', function fnIt() {
        expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
    });
    it(`should react to an action with the type ${PAGE_INCREASE_VIEWS}`, function fnIt() {
        expect(
            reducer(undefined, {
                type: PAGE_INCREASE_VIEWS
            })
        ).toMatchSnapshot();
    });
});

describe('reducerPage', function fnDescribe() {
    it(`should have a key of ${PAGE_RESOURCE_NAME}`, function fnIt() {
        expect(reducerPage).toEqual(
            expect.objectContaining({
                [PAGE_RESOURCE_NAME]: reducer
            })
        );
    });
});
