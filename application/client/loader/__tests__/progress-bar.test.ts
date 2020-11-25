import {
    displayProgress,
    displayZeroLoaded,
    displayAllLoaded
} from '../progress-bar';

describe('displayProgress', function fnDescribe() {
    beforeEach(function fnBeforeEach() {
        document.body.innerHTML = '<div><progress id="m-progress" /></div>';
    });
    afterEach(function fnAfterEach() {
        document.body.innerHTML = '';
    });

    it('should display progress correctly', function fnIt() {
        displayProgress('23');
        expect(document.body.innerHTML).toMatchSnapshot();
    });
});

describe('displayZeroLoaded', function fnDescribe() {
    beforeEach(function fnBeforeEach() {
        document.body.innerHTML = '<div><progress id="m-progress" /></div>';
    });
    afterEach(function fnAfterEach() {
        document.body.innerHTML = '';
    });

    it('should display progress correctly', function fnIt() {
        displayZeroLoaded();
        expect(document.body.innerHTML).toMatchSnapshot();
    });
});

describe('displayAllLoaded', function fnDescribe() {
    beforeEach(function fnBeforeEach() {
        document.body.innerHTML = '<div><progress id="m-progress" /></div>';
    });
    afterEach(function fnAfterEach() {
        document.body.innerHTML = '';
    });

    it('should display progress correctly', function fnIt() {
        displayAllLoaded();
        expect(document.body.innerHTML).toMatchSnapshot();
    });
});
