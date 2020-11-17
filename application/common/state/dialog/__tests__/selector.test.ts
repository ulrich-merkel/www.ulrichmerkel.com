import { mockState } from '../../../../__tests__/utils/get-mocked-store';
import {
    selectStateDialog,
    selectStateDialogContent,
    selectStateDialogVisible
} from '../selector';

describe('selectStateDialog', function fnDescribe() {
    it('should return the correct state', function fnIt() {
        expect(selectStateDialog(mockState)).toMatchSnapshot();
    });
    it('should return the initial state if resource key is not found', function fnIt() {
        const state = {
            foo: {
                bar: 'lorem'
            }
        };
        expect(selectStateDialog(state)).toMatchSnapshot();
    });
    it('should return the initial state if no state is found', function fnIt() {
        expect(selectStateDialog()).toMatchSnapshot();
    });
});

describe('selectStateDialogVisible', function fnDescribe() {
    it('should return the correct state', function fnIt() {
        expect(selectStateDialogVisible(mockState)).toMatchSnapshot();
    });
    it("should return the default if state isn't found", function fnIt() {
        const state = {
            foo: {
                bar: 'lorem'
            }
        };
        expect(selectStateDialogVisible(state)).toMatchSnapshot();
    });
});

describe('selectStateDialogContent', function fnDescribe() {
    it('should return the correct state', function fnIt() {
        expect(selectStateDialogContent(mockState)).toMatchSnapshot();
    });
    it("should return the default if state isn't found", function fnIt() {
        const state = {
            foo: {
                bar: 'lorem'
            }
        };
        expect(selectStateDialogContent(state)).toMatchSnapshot();
    });
});
