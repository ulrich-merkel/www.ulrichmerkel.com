/* eslint-disable func-names */
import { selectStateCsrf, selectStateCsrfToken } from '../selector';
import { initialState, CSRF_RESOURCE_NAME } from '../duck';

describe('selectStateCsrf', function () {
    it('should return the correct state', function () {
        const state = {
            [CSRF_RESOURCE_NAME]: {
                payload: {
                    token: 'da39a3ee5e6b4b0d3255bfef95601890afd80709'
                }
            }
        };
        expect(selectStateCsrf(state)).toEqual(state[CSRF_RESOURCE_NAME]);
    });
    it('should return the initial state if resource key is not found', function () {
        const state = {
            foo: {
                bar: 'lorem'
            }
        };
        expect(selectStateCsrf(state)).toEqual(initialState);
    });
    it('should return the initial state if no state is found', function () {
        expect(selectStateCsrf()).toEqual(initialState);
    });
});

describe('selectStateCsrfToken', function () {
    it('should return the correct state', function () {
        const state = {
            [CSRF_RESOURCE_NAME]: {
                payload: {
                    token: 'da39a3ee5e6b4b0d3255bfef95601890afd80709'
                }
            }
        };
        expect(selectStateCsrfToken(state)).toEqual(
            state[CSRF_RESOURCE_NAME].payload.token
        );
    });
    it("should return the default if state isn't found", function () {
        const state = {
            foo: {
                bar: 'lorem'
            }
        };
        expect(selectStateCsrfToken(state)).toEqual(initialState.payload.token);
    });
});
