import { mockedState } from '../../../../__tests__/utils/get-mocked-store';
import { recordSaga } from '../../../../__tests__/utils/record-saga';
import {
    AVAILABLE_COLOR_SCHEMES,
    INITIAL_STATE,
    COLOR_SCHEME_RESOURCE_NAME
} from '../constants';
import { toggleColorSchemeSelectedSaga, watchColorScheme } from '../sagas';

const { DARK, LIGHT } = AVAILABLE_COLOR_SCHEMES;

describe('toggleColorSchemeSelectedSaga', function fnDescribe() {
    it('should add the correct selected value for initial state', async function fnIt() {
        const dispatched = await recordSaga(toggleColorSchemeSelectedSaga);
        expect(dispatched).toMatchSnapshot();
    });
    it(`should add the correct selected value for ${DARK}`, async function fnIt() {
        const dispatched = await recordSaga(toggleColorSchemeSelectedSaga, {
            ...mockedState,
            [COLOR_SCHEME_RESOURCE_NAME]: {
                ...INITIAL_STATE,
                payload: {
                    selected: DARK
                }
            }
        });
        expect(dispatched).toMatchSnapshot();
    });
    it(`should add the correct selected value for ${LIGHT}`, async function fnIt() {
        const dispatched = await recordSaga(toggleColorSchemeSelectedSaga, {
            ...mockedState,
            [COLOR_SCHEME_RESOURCE_NAME]: {
                ...INITIAL_STATE,
                payload: {
                    selected: LIGHT
                }
            }
        });
        expect(dispatched).toMatchSnapshot();
    });
});

describe('watchColorScheme', function fnDescribe() {
    it('should watch correctly', async function fnIt() {
        const dispatched = await recordSaga(watchColorScheme, mockedState);
        expect(dispatched).toMatchSnapshot();
    });
});
