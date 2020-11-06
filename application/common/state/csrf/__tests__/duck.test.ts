/* eslint-disable func-names */
import {
    changeCsrfToken,
    initialState,
    CHANGE_CSRF_TOKEN,
    CSRF_RESOURCE_NAME,
    reducerCsrf,
    reducer
} from '../duck';

describe('changeCsrfToken', function () {
    it(`should have a type of ${CHANGE_CSRF_TOKEN}`, function () {
        expect(changeCsrfToken().type).toEqual(CHANGE_CSRF_TOKEN);
    });
    it('should pass on the isHeaderFixed value we pass in', function () {
        const token = 'foo';
        expect(changeCsrfToken(token).token).toEqual(token);
    });
});

describe('reducer', function () {
    it('should return the initial state', function () {
        expect(reducer(undefined, {})).toEqual(initialState);
    });
    it(`should react to an action with the type ${CHANGE_CSRF_TOKEN}`, function () {
        expect(
            reducer(undefined, {
                type: CHANGE_CSRF_TOKEN,
                token: 'foo'
            })
        ).toMatchSnapshot();
    });
    it(`should return the current state if ${CHANGE_CSRF_TOKEN} payload is empty`, function () {
        expect(
            reducer(undefined, {
                type: CHANGE_CSRF_TOKEN
            })
        ).toMatchSnapshot();
    });
});

describe('reducerCsrf', function () {
    it(`should have a key of ${CSRF_RESOURCE_NAME}`, function () {
        expect(reducerCsrf).toEqual(
            expect.objectContaining({
                [CSRF_RESOURCE_NAME]: reducer
            })
        );
    });
});
