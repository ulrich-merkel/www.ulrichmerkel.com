import {
    displayProgress,
    displayZeroLoaded,
    displayAllLoaded
} from '../progress-bar';

describe('displayProgress', function fnDescribe() {
    it('should display progress correctly', function fnIt() {
        expect(displayProgress(23)).toMatchSnapshot();
    });
});

describe('displayZeroLoaded', function fnDescribe() {
    it('should display progress correctly', function fnIt() {
        expect(displayZeroLoaded()).toMatchSnapshot();
    });
});

describe('displayAllLoaded', function fnDescribe() {
    it('should display progress correctly', function fnIt() {
        expect(displayAllLoaded()).toMatchSnapshot();
    });
});
