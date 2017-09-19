/* eslint-disable import/no-extraneous-dependencies, func-names, immutable/no-let */
// @see https://github.com/airbnb/enzyme/issues/426
// @see https://github.com/facebook/jest/issues/1353
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import mockedStore from '../../../__mocks__/store';
import ModuleFormContactContainer from '../contact';

describe('common/component/module/form/contact', function () {
    const defaultProps = {
        componentType: 'nav',
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
        handleContactChange: () => {},
        routerState: '',
        csrfToken: ''
    };

    it('should render correctly', function () {
        const component = renderer.create(
            <Provider store={mockedStore}>
                <ModuleFormContactContainer
                    {...defaultProps}
                >
                    Module form contact children
                </ModuleFormContactContainer>
            </Provider>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        tree.props.onSubmit();
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render a success message', function () {
        const tree = renderer.create(
            <Provider store={mockedStore}>
                <ModuleFormContactContainer
                    {...defaultProps}
                    routerState={'success'}
                >
                    Module form contact success
                </ModuleFormContactContainer>
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render an error message', function () {
        const tree = renderer.create(
            <Provider store={mockedStore}>
                <ModuleFormContactContainer
                    {...defaultProps}
                    routerState={'error'}
                >
                    Module form contact error
                </ModuleFormContactContainer>
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
