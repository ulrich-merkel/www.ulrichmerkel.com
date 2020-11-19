import { mockState } from '../../../../__tests__/utils/get-mocked-store';
import {
    selectStateReducedMotion,
    selectStateReducedMotionSelectedReduce
} from '../selector';

describe('selectStateReducedMotion', function fnDescribe() {
    it('should return the correct state', function fnIt() {
        expect(selectStateReducedMotion(mockState)).toMatchSnapshot();
    });
    it('should return the initial state if resource key is not found', function fnIt() {
        const state = {
            foo: {
                bar: 'lorem'
            }
        };
        expect(selectStateReducedMotion(state)).toMatchSnapshot();
    });
    it('should return the initial state if no state is found', function fnIt() {
        expect(selectStateReducedMotion()).toMatchSnapshot();
    });
});

describe('selectStateReducedMotionSelectedReduce', function fnDescribe() {
    it('should return the correct state', function fnIt() {
        expect(
            selectStateReducedMotionSelectedReduce(mockState)
        ).toMatchSnapshot();
    });
    it("should return the default if state isn't found", function fnIt() {
        const state = {
            foo: {
                bar: 'lorem'
            }
        };
        expect(selectStateReducedMotionSelectedReduce(state)).toMatchSnapshot();
    });
});
