import { mockState } from '../../../../__tests__/utils/get-mocked-store';
import { selectStateSearch, selectStateSearchTerm } from '../selector';

describe('selectStateSearch', function fnDescribe() {
    it('should return the correct state', function fnIt() {
        expect(selectStateSearch(mockState)).toMatchSnapshot();
    });
    it('should return the initial state if resource key is not found', function fnIt() {
        const state = {
            foo: {
                bar: 'lorem'
            }
        };
        expect(selectStateSearch(state)).toMatchSnapshot();
    });
    it('should return the initial state if no state is found', function fnIt() {
        expect(selectStateSearch()).toMatchSnapshot();
    });
});

describe('selectStateSearchTerm', function fnDescribe() {
    it('should return the correct state', function fnIt() {
        expect(selectStateSearchTerm(mockState)).toMatchSnapshot();
    });
    it("should return the default if state isn't found", function fnIt() {
        const state = {
            foo: {
                bar: 'lorem'
            }
        };
        expect(selectStateSearchTerm(state)).toMatchSnapshot();
    });
});
