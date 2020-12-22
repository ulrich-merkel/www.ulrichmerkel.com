import { runSaga } from 'redux-saga';

/**
 * A small helper to simplify saga testing by recording the
 * result.
 *
 * @see {@link https://dev.to/phil/the-best-way-to-test-redux-sagas-4hib}
 *
 * @param {Function} saga - The saga generator to be tested
 * @param {object} initialState - The redux state
 * @returns {Array} The recorded redux actions
 */
export async function recordSaga(saga: Generator, initialState = {}): [] {
    const dispatched = [];

    await runSaga(
        {
            dispatch: (action) => dispatched.push(action),
            getState: () => initialState
        },
        saga
    ).done;

    return dispatched;
}
