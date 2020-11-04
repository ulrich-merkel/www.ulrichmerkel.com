/* eslint-disable func-names */
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

describe('changeScrollHeaderFixed', function () {
    it(`should have a type of ${SCROLL_HEADER_FIXED}`, function () {
        expect(changeScrollHeaderFixed().type).toEqual(SCROLL_HEADER_FIXED);
    });
    it('should pass on the headerFixed value we pass in', function () {
        const headerFixed = false;
        expect(changeScrollHeaderFixed(headerFixed).headerFixed).toEqual(
            headerFixed
        );
    });
});

describe('changeScrollHeaderVisible', function () {
    it(`should have a type of ${SCROLL_HEADER_VISIBLE}`, function () {
        expect(changeScrollHeaderVisible().type).toEqual(SCROLL_HEADER_VISIBLE);
    });
    it('should pass on the headerVisible value we pass in', function () {
        const headerVisible = false;
        expect(changeScrollHeaderVisible(headerVisible).headerVisible).toEqual(
            headerVisible
        );
    });
});

describe('reducer', function () {
    it('should return the initial state', function () {
        expect(reducer(undefined, {})).toEqual(initialState);
    });
    it(`should react to an action with the type ${SCROLL_HEADER_FIXED}`, function () {
        expect(
            reducer(undefined, {
                type: SCROLL_HEADER_FIXED,
                headerFixed: true
            })
        ).toMatchSnapshot();
    });
    it(`should return the current state if ${SCROLL_HEADER_FIXED} payload is empty`, function () {
        expect(
            reducer(undefined, {
                type: SCROLL_HEADER_FIXED
            })
        ).toMatchSnapshot();
    });
    it(`should react to an action with the type ${SCROLL_HEADER_VISIBLE}`, function () {
        expect(
            reducer(undefined, {
                type: SCROLL_HEADER_VISIBLE,
                headerVisible: false
            })
        ).toMatchSnapshot();
    });
    it(`should return the current state if ${SCROLL_HEADER_VISIBLE} payload is empty`, function () {
        expect(
            reducer(undefined, {
                type: SCROLL_HEADER_VISIBLE
            })
        ).toMatchSnapshot();
    });
});

describe('reducerScroll', function () {
    it(`should have a key of ${SCROLL_RESOURCE_NAME}`, function () {
        expect(reducerScroll).toEqual(
            expect.objectContaining({
                [SCROLL_RESOURCE_NAME]: reducer
            })
        );
    });
});
