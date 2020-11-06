import { mockState } from '../../../../__tests__/utils/get-mocked-store';
import {
    selectStateColorScheme,
    selectStateColorSchemeSelected
} from '../selector';

describe('selectStateColorScheme', function fnDescribe() {
    it('should return the correct state', function fnIt() {
        expect(selectStateColorScheme(mockState)).toMatchSnapshot();
    });
    it('should return the initial state if resource key is not found', function fnIt() {
        const state = {
            foo: {
                bar: 'lorem'
            }
        };
        expect(selectStateColorScheme(state)).toMatchSnapshot();
    });
    it('should return the initial state if no state is found', function fnIt() {
        expect(selectStateColorScheme()).toMatchSnapshot();
    });
});

describe('selectStateColorSchemeSelected', function fnDescribe() {
    it('should return the correct state', function fnIt() {
        expect(selectStateColorSchemeSelected(mockState)).toMatchSnapshot();
    });
    it("should return the default if state isn't found", function fnIt() {
        const state = {
            foo: {
                bar: 'lorem'
            }
        };
        expect(selectStateColorSchemeSelected(state)).toMatchSnapshot();
    });
});
