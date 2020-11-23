import { mockedState } from '../../../../__tests__/utils/get-mocked-store';
import { selectStatePage, selectStatePageViewsAfterReload } from '../selector';

describe('selectStatePage', function fnDescribe() {
    it('should return the correct state', function fnIt() {
        expect(selectStatePage(mockedState)).toMatchSnapshot();
    });
    it('should return the initial state if resource key is not found', function fnIt() {
        const state = {
            foo: {
                bar: 'lorem'
            }
        };
        expect(selectStatePage(state)).toMatchSnapshot();
    });
    it('should return the initial state if no state is found', function fnIt() {
        expect(selectStatePage()).toMatchSnapshot();
    });
});

describe('selectStatePageViewsAfterReload', function fnDescribe() {
    it('should return the correct state', function fnIt() {
        expect(selectStatePageViewsAfterReload(mockedState)).toMatchSnapshot();
    });
    it("should return the default if state isn't found", function fnIt() {
        const state = {
            foo: {
                bar: 'lorem'
            }
        };
        expect(selectStatePageViewsAfterReload(state)).toMatchSnapshot();
    });
});
