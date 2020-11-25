import { showDialog, closeDialog } from '../dialog';

jest.useFakeTimers();

describe('showDialog', function fnDescribe() {
    beforeEach(function fnBeforeEach() {
        document.body.innerHTML = '<div><button id="button" /></div>';
    });
    afterEach(function fnAfterEach() {
        document.body.innerHTML = '';
    });

    it('should add the correct styles', function fnIt() {
        showDialog();
        jest.runAllTimers();
        expect(document.body).toMatchSnapshot();
    });
});

describe('closeDialog', function fnDescribe() {
    beforeEach(function fnBeforeEach() {
        document.body.innerHTML = '<div><button id="button" /></div>';
    });
    afterEach(function fnAfterEach() {
        document.body.innerHTML = '';
    });

    it('should add the correct styles', function fnIt() {
        closeDialog();
        jest.runAllTimers();
        expect(document.body).toMatchSnapshot();
    });
});
