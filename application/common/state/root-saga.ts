import { all, fork, StrictEffect } from 'redux-saga/effects';
import { watchReducedMotion } from './reduced-motion/sagas';

/**
 * Combine single sagas for the use in the middleware. Using fork to
 * get non-blocking sagas for performance.
 *
 * @see {@link https://redux-saga.js.org/docs/advanced/RootSaga.html}
 */
export function* rootSaga(): Generator<StrictEffect> {
    yield all([fork(watchReducedMotion)]);
}
