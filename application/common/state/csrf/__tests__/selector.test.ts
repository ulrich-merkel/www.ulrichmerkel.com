import { mockedState } from '../../../../__tests__/utils/get-mocked-store';
import { selectStateCsrf, selectStateCsrfToken } from '../selector';

describe('selectStateCsrf', function fndDescribe() {
    it('should return the correct state', function fnIt() {
        expect(selectStateCsrf(mockedState)).toMatchSnapshot();
    });
    it('should return the initial state if resource key is not found', function fnIt() {
        const state = {
            foo: {
                bar: 'lorem'
            }
        };
        expect(selectStateCsrf(state)).toMatchSnapshot();
    });
    it('should return the initial state if no state is found', function fnIt() {
        expect(selectStateCsrf()).toMatchSnapshot();
    });
});

describe('selectStateCsrfToken', function fndDescribe() {
    it('should return the correct state', function fnIt() {
        expect(selectStateCsrfToken(mockedState)).toMatchSnapshot();
    });
    it("should return the default if state isn't found", function fnIt() {
        const state = {
            foo: {
                bar: 'lorem'
            }
        };
        expect(selectStateCsrfToken(state)).toMatchSnapshot();
    });
});
