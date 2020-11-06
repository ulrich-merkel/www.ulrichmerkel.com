/* eslint-disable func-names */
import { selectStatePage, selectStatePageViewsAfterReload } from '../selector';
import { initialState, PAGE_RESOURCE_NAME } from '../duck';

describe('selectStatePage', function () {
    it('should return the correct state', function () {
        const state = {
            [PAGE_RESOURCE_NAME]: {
                payload: {
                    locale: 'en-EN'
                }
            }
        };
        expect(selectStatePage(state)).toEqual(state[PAGE_RESOURCE_NAME]);
    });
    it('should return the initial state if resource key is not found', function () {
        const state = {
            foo: {
                bar: 'lorem'
            }
        };
        expect(selectStatePage(state)).toEqual(initialState);
    });
    it('should return the initial state if no state is found', function () {
        expect(selectStatePage()).toEqual(initialState);
    });
});

describe('selectStatePageViewsAfterReload', function () {
    it('should return the correct state', function () {
        const state = {
            [PAGE_RESOURCE_NAME]: {
                payload: {
                    viewsAfterReload: 12
                }
            }
        };
        expect(selectStatePageViewsAfterReload(state)).toEqual(
            state[PAGE_RESOURCE_NAME].payload.viewsAfterReload
        );
    });
    it("should return the default if state isn't found", function () {
        const state = {
            foo: {
                bar: 'lorem'
            }
        };
        expect(selectStatePageViewsAfterReload(state)).toEqual(
            initialState.payload.viewsAfterReload
        );
    });
});
