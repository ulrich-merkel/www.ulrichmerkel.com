/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import mockedStore from './../../../__mocks__/store';
import ComponentToBeTested from './../contact';

// @see https://github.com/airbnb/enzyme/issues/426
// @see https://github.com/facebook/jest/issues/1353
describe('component/module/form/contact', function () {
    describe('Snapshot', function () {
        it('should render correctly', function () {
            const component = renderer.create(
                <Provider store={mockedStore}>
                    <ComponentToBeTested
                        componentType='nav'
                        className='foo'
                        content={{
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
                        }}
                        storeState={{}}
                        handleContactChange={() => {}}
                        routerState={''}
                        csrfToken={''}
                    >
                        Hello
                    </ComponentToBeTested>
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
                    <ComponentToBeTested
                        componentType='nav'
                        className='foo'
                        content={{
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
                        }}
                        storeState={{}}
                        handleContactChange={() => {}}
                        routerState={'success'}
                        csrfToken={''}
                    >
                        Hello
                    </ComponentToBeTested>
                </Provider>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
        it('should render an error message', function () {
            const tree = renderer.create(
                <Provider store={mockedStore}>
                    <ComponentToBeTested
                        componentType='nav'
                        className='foo'
                        content={{
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
                        }}
                        storeState={{}}
                        handleContactChange={() => {}}
                        routerState={'error'}
                        csrfToken={''}
                    >
                        Hello
                    </ComponentToBeTested>
                </Provider>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
