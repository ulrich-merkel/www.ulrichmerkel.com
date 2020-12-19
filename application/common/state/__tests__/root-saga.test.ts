import { mockedState } from '../../../__tests__/utils/get-mocked-store';
import { recordSaga } from '../../../__tests__/utils/record-saga';
import { rootSaga } from '../root-saga';

describe('rootSaga', function fnDescribe() {
    it('should watch correctly', async function fnIt() {
        const dispatched = await recordSaga(rootSaga, mockedState);
        expect(dispatched).toMatchSnapshot();
    });
});
