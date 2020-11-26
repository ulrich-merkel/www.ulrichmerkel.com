import { validate, isValid, canSendForm } from '../utils';

describe('validate', function fnDescribe() {
    it('should return the correct result', function fnIt() {
        expect(validate()).toMatchSnapshot();
        expect(
            validate({
                name: '',
                email: '',
                subject: '',
                message: ''
            })
        ).toMatchSnapshot();
        expect(
            validate({
                name: 'foo',
                email: 'bar',
                subject: 'bar',
                message: 'bar'
            })
        ).toMatchSnapshot();
        expect(
            validate({
                name: 'foo',
                email: 'bar@foo.de',
                subject: 'bar',
                message: 'bar'
            })
        ).toMatchSnapshot();
    });
});

describe('isValid', function fnDescribe() {
    it('should return the correct result', function fnIt() {
        expect(isValid()).toMatchSnapshot();
        expect(
            isValid({
                name: '',
                email: '',
                subject: '',
                message: ''
            })
        ).toMatchSnapshot();
        expect(
            isValid({
                name: 'foo',
                email: 'bar',
                subject: 'bar',
                message: 'bar'
            })
        ).toMatchSnapshot();
        expect(
            isValid({
                name: 'foo',
                email: 'bar@foo.de',
                subject: 'bar',
                message: 'bar'
            })
        ).toMatchSnapshot();
    });
});

describe('canSendForm', function fnDescribe() {
    it('should return the correct result', function fnIt() {
        expect(canSendForm()).toMatchSnapshot();
        expect(
            canSendForm({
                name: '',
                email: '',
                subject: '',
                message: ''
            })
        ).toMatchSnapshot();
        expect(
            canSendForm({
                name: 'foo',
                email: 'bar',
                subject: 'bar',
                message: 'bar'
            })
        ).toMatchSnapshot();
        expect(
            canSendForm({
                name: 'foo',
                email: 'bar@foo.de',
                subject: 'bar',
                message: 'bar'
            })
        ).toMatchSnapshot();
    });
});
