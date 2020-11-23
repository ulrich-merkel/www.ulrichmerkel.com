import { mockedState } from '../../../../__tests__/utils/get-mocked-store';
import {
    selectStateScroll,
    selectStateScrollIsHeaderFixed,
    selectStateScrollIsHeaderVisible
} from '../selector';

describe('selectStateScroll', function fnDescribe() {
    it('should return the correct state', function fnIt() {
        expect(selectStateScroll(mockedState)).toMatchSnapshot();
    });
    it('should return the initial state if resource key is not found', function fnIt() {
        const state = {
            foo: {
                bar: 'lorem'
            }
        };
        expect(selectStateScroll(state)).toMatchSnapshot();
    });
    it('should return the initial state if no state is found', function fnIt() {
        expect(selectStateScroll()).toMatchSnapshot();
    });
});

describe('selectStateScrollIsHeaderFixed', function fnDescribe() {
    it('should return the correct state', function fnIt() {
        expect(selectStateScrollIsHeaderFixed(mockedState)).toMatchSnapshot();
    });
    it("should return a boolean if state isn't found", function fnIt() {
        const state = {
            super: {
                dummy: 'ipsum'
            }
        };
        expect(selectStateScrollIsHeaderFixed(state)).toMatchSnapshot();
    });
});

describe('selectStateScrollIsHeaderVisible', function fnDescribe() {
    it('should return the correct state', function fnIt() {
        expect(selectStateScrollIsHeaderVisible(mockedState)).toMatchSnapshot();
    });
    it("should return a boolean if state isn't found", function fnIt() {
        const state = {
            dummy: {
                test: 'ipsum'
            }
        };
        expect(selectStateScrollIsHeaderVisible(state)).toMatchSnapshot();
    });
});
