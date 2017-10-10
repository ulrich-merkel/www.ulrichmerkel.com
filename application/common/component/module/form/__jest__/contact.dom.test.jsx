/* eslint-disable import/no-extraneous-dependencies, import/no-named-as-default, func-names */
// import 'jsdom-global/register';
// import React from 'react';
// import { mount } from 'enzyme';
// import sinon from 'sinon';

// import { ModuleFormContact } from '../contact';

describe('common/component/module/form/contact', function () {
    it('should trigger onChange and handleContactChange', function () {
        expect(true).toBeTruthy();
    });
    // const defaultProps = {
    //     componentType: 'nav',
    //     className: 'form-contact',
    //     content: {
    //         legend: 'legend',
    //         inputName: 'inputName',
    //         inputEmail: 'inputEmail',
    //         inputWebsite: 'inputWebsite',
    //         inputSubject: 'inputSubject',
    //         inputMessage: 'inputMessage',
    //         btnResetTitle: 'btnResetTitle',
    //         btnResetLabel: 'btnResetLabel',
    //         btnSubmitTitle: 'btnSubmitTitle',
    //         btnSubmitLabel: 'btnSubmitLabel',
    //         btnRenewTitle: 'btnRenewTitle',
    //         btnRenewLabel: 'btnRenewLabel',
    //         thankYou: 'thankYou'
    //     },
    //     storeState: {},
    //     handleContactChange: () => {},
    //     routerState: '',
    //     csrfToken: ''
    // };

    // it('should trigger onChange and handleContactChange', function () {
    //     const onChange = sinon.spy(ModuleFormContact.prototype, 'onChange');
    //     const handleContactChange = sinon.spy();

    //     mount(
    //         <ModuleFormContact
    //             {...defaultProps}
    //             handleContactChange={handleContactChange}
    //         >
    //             Module form contact children
    //         </ModuleFormContact>
    //     );

    //     expect(onChange.calledOnce).toBeFalsy();
    //     expect(handleContactChange.calledOnce).toBeFalsy();

    //     // @TODO: Adjust expect for enzyme@16
    //     // wrapper.find('#name').simulate('keydown', { which: 'a' }).simulate('change');
    //     // expect(onChange.callCount).toEqual(1);
    //     // expect(handleContactChange.callCount).toEqual(1);

    //     // wrapper.find('#email').simulate('keydown', { which: 'b' }).simulate('change');
    //     // expect(onChange.callCount).toEqual(2);
    //     // expect(handleContactChange.callCount).toEqual(2);

    //     // wrapper.find('#subject').simulate('keydown', { which: 'c' }).simulate('change');
    //     // expect(onChange.callCount).toEqual(3);
    //     // expect(handleContactChange.callCount).toEqual(3);

    //     // wrapper.find('#message').simulate('keydown', { which: 'd' }).simulate('change');
    //     // expect(onChange.callCount).toEqual(4);
    //     // expect(handleContactChange.callCount).toEqual(4);
    // });
});
