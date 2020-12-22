import { mockedState } from '../../../../__tests__/utils/get-mocked-store';
import { recordSaga } from '../../../../__tests__/utils/record-saga';
import {
    AVAILABLE_MOTION_PREFERENCES,
    INITIAL_STATE,
    REDUCED_MOTION_RESOURCE_NAME
} from '../constants';
import { toggleReducedMotionSelectedSaga, watchReducedMotion } from '../sagas';

const { NO_PREFERENCE, REDUCE } = AVAILABLE_MOTION_PREFERENCES;

describe('toggleReducedMotionSelectedSaga', function fnDescribe() {
    it('should add the correct selected value for initial state', async function fnIt() {
        const dispatched = await recordSaga(toggleReducedMotionSelectedSaga);
        expect(dispatched).toMatchSnapshot();
    });
    it(`should add the correct selected value for ${NO_PREFERENCE}`, async function fnIt() {
        const dispatched = await recordSaga(toggleReducedMotionSelectedSaga, {
            ...mockedState,
            [REDUCED_MOTION_RESOURCE_NAME]: {
                ...INITIAL_STATE,
                payload: {
                    selected: NO_PREFERENCE
                }
            }
        });
        expect(dispatched).toMatchSnapshot();
    });
    it(`should add the correct selected value for ${REDUCE}`, async function fnIt() {
        const dispatched = await recordSaga(toggleReducedMotionSelectedSaga, {
            ...mockedState,
            [REDUCED_MOTION_RESOURCE_NAME]: {
                ...INITIAL_STATE,
                payload: {
                    selected: REDUCE
                }
            }
        });
        expect(dispatched).toMatchSnapshot();
    });
});

describe('watchReducedMotion', function fnDescribe() {
    it('should watch correctly', async function fnIt() {
        const dispatched = await recordSaga(watchReducedMotion, mockedState);
        expect(dispatched).toMatchSnapshot();
    });
});
