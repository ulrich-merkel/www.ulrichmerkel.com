import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { ModuleFormContactConnected } from '../contact';

describe('ModuleFormContact', function fnDescribe() {
    const defaultProps = {
        htmlElement: 'nav',
        className: 'form-contact',
        content: {
            legend: 'legend',
            inputName: 'inputName',
            inputEmail: 'inputEmail',
            inputWebsite: 'inputWebsite',
            inputSubject: 'inputSubject',
            inputMessage: 'inputMessage',
            btnResetTitle: 'btnResetTitle',
            btnResetLabel: 'btnResetLabel',
            btnSubmitTitle: 'btnSubmitTitle',
            btnSubmitLabel: 'btnSubmitLabel',
            btnRenewTitle: 'btnRenewTitle',
            btnRenewLabel: 'btnRenewLabel',
            thankYou: 'thankYou'
        },
        storeState: {},
        onChangeContactForm: jest.fn(),
        routerState: '',
        csrfToken: ''
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <ModuleFormContactConnected {...defaultProps} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render a success message', function fnIt() {
        const { asFragment } = render(
            <ModuleFormContactConnected
                {...defaultProps}
                routerState={'success'}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render an error message', function fnIt() {
        const { asFragment } = render(
            <ModuleFormContactConnected
                {...defaultProps}
                routerState={'error'}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
