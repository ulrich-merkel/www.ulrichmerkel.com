import { mockedState } from '../../../../__tests__/utils/get-mocked-store';
import { selectStateContact, selectStateContactForm } from '../selector';

describe('selectStateContact', function fnDescribe() {
    it('should return the correct state', function fnIt() {
        expect(selectStateContact(mockedState)).toMatchSnapshot();
    });
    it('should return the initial state if resource key is not found', function fnIt() {
        const state = {
            foo: {
                bar: 'lorem'
            }
        };
        expect(selectStateContact(state)).toMatchSnapshot();
    });
    it('should return the initial state if no state is found', function fnIt() {
        expect(selectStateContact()).toMatchSnapshot();
    });
});

describe('selectStateContactForm', function fnDescribe() {
    it('should return the correct state', function fnIt() {
        expect(selectStateContactForm(mockedState)).toMatchSnapshot();
    });
    it("should return the default if state isn't found", function fnIt() {
        const state = {
            foo: {
                bar: 'lorem'
            }
        };
        expect(selectStateContactForm(state)).toMatchSnapshot();
    });
});
