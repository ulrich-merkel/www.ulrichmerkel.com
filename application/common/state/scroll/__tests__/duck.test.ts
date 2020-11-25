import {
    changeScrollHeaderFixed,
    changeScrollHeaderVisible,
    initialState,
    SCROLL_HEADER_FIXED,
    SCROLL_HEADER_VISIBLE,
    SCROLL_RESOURCE_NAME,
    reducerScroll,
    reducer
} from '../duck';

describe('changeScrollHeaderFixed', function fnDescribe() {
    it(`should have a type of ${SCROLL_HEADER_FIXED}`, function fnIt() {
        expect(changeScrollHeaderFixed().type).toEqual(SCROLL_HEADER_FIXED);
    });
    it('should pass on the isHeaderFixed value we pass in', function fnIt() {
        const isHeaderFixed = false;
        expect(changeScrollHeaderFixed(isHeaderFixed).isHeaderFixed).toEqual(
            isHeaderFixed
        );
    });
});

describe('changeScrollHeaderVisible', function fnDescribe() {
    it(`should have a type of ${SCROLL_HEADER_VISIBLE}`, function fnIt() {
        expect(changeScrollHeaderVisible().type).toEqual(SCROLL_HEADER_VISIBLE);
    });
    it('should pass on the isHeaderVisible value we pass in', function fnIt() {
        const isHeaderVisible = false;
        expect(
            changeScrollHeaderVisible(isHeaderVisible).isHeaderVisible
        ).toEqual(isHeaderVisible);
    });
});

describe('reducer', function fnDescribe() {
    it('should return the initial state', function fnIt() {
        expect(reducer(undefined, {})).toEqual(initialState);
    });
    it(`should react to an action with the type ${SCROLL_HEADER_FIXED}`, function fnIt() {
        expect(
            reducer(undefined, {
                type: SCROLL_HEADER_FIXED,
                isHeaderFixed: true
            })
        ).toMatchSnapshot();
    });
    it(`should return the current state if ${SCROLL_HEADER_FIXED} payload is empty`, function fnIt() {
        expect(
            reducer(undefined, {
                type: SCROLL_HEADER_FIXED
            })
        ).toMatchSnapshot();
    });
    it(`should react to an action with the type ${SCROLL_HEADER_VISIBLE}`, function fnIt() {
        expect(
            reducer(undefined, {
                type: SCROLL_HEADER_VISIBLE,
                isHeaderVisible: false
            })
        ).toMatchSnapshot();
    });
    it(`should return the current state if ${SCROLL_HEADER_VISIBLE} payload is empty`, function fnIt() {
        expect(
            reducer(undefined, {
                type: SCROLL_HEADER_VISIBLE
            })
        ).toMatchSnapshot();
    });
});

describe('reducerScroll', function fnDescribe() {
    it(`should have a key of ${SCROLL_RESOURCE_NAME}`, function fnIt() {
        expect(reducerScroll).toEqual(
            expect.objectContaining({
                [SCROLL_RESOURCE_NAME]: reducer
            })
        );
    });
});
