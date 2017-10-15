/* eslint-disable import/no-extraneous-dependencies, func-names */
import 'jsdom-global/register';
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import sinon from 'sinon';

import mockedStore from '../../__mocks__/store';
import mockedWindowEvents from '../../__mocks__/window-events';
import LayoutDialogContainer, { LayoutDialog } from '../dialog';

describe('common/component/layout/body', function () {
    const defaultProps = {
        content: {
            foo: 'bar'
        },
        dialogVisible: true,
        handleChangeDialogVisible: Function.prototype,
        dialogPage: 'foo',
        page: 'foo'
    };

    it('should render correctly', function () {
        const wrapper = mount(
            <Provider store={mockedStore}>
                <LayoutDialogContainer {...defaultProps}>
                    <div className='test'>Dialog Children</div>
                </LayoutDialogContainer>
            </Provider>
        );
        expect(wrapper.find('.test').length).toEqual(1);
    });
    it('should render null if not visible', function () {
        const wrapper = mount(
            <Provider store={mockedStore}>
                <LayoutDialogContainer {...defaultProps} dialogVisible={false}>
                    <div className='test'>Dialog Children</div>
                </LayoutDialogContainer>
            </Provider>
        );
        expect(wrapper.find('.test').length).toEqual(0);
    });
    it('should trigger shouldComponentUpdate', function () {
        const shouldComponentUpdate = sinon.spy(LayoutDialogContainer.prototype, 'shouldComponentUpdate');

        const wrapper = mount(
            <Provider store={mockedStore}>
                <LayoutDialogContainer {...defaultProps}>
                    <div className='test'>Dialog Children</div>
                </LayoutDialogContainer>
            </Provider>
        );

        expect(shouldComponentUpdate.calledOnce).toBeFalsy();
        wrapper.setProps({
            content: {
                bar: 'foo'
            }
        });
        expect(shouldComponentUpdate.calledOnce).toBeTruthy();
    });
    it('should handle onKeyDown events correctly', function () {
        const onKeyDown = sinon.spy(LayoutDialog.prototype, 'onKeyDown');
        const handleChangeDialogVisible = sinon.spy();

        const wrapper = mount(
            <LayoutDialog {...defaultProps} handleChangeDialogVisible={handleChangeDialogVisible}>
                <div className='test'>Dialog Children</div>
            </LayoutDialog>
        );

        mockedWindowEvents.keydown({ keyCode: 27 });
        expect(onKeyDown.calledOnce).toBeTruthy();
        expect(handleChangeDialogVisible.calledOnce).toBeTruthy();
        wrapper.unmount();
        expect(onKeyDown.calledTwice).toBeFalsy();
    });
    it('should handle onClose click events correctly', function () {
        const onClose = sinon.spy(LayoutDialog.prototype, 'onClose');
        const handleChangeDialogVisible = sinon.spy();

        const wrapper = mount(
            <LayoutDialog {...defaultProps} handleChangeDialogVisible={handleChangeDialogVisible}>
                <div className='test'>Dialog Children</div>
            </LayoutDialog>
        );

        wrapper.setProps({
            dialogVisible: true
        });
        const buttonClose = wrapper.find('.l-dialog__button--close');
        if (buttonClose.length) {
            // @TODO: Adjust expect for enzyme@16
            buttonClose.first().simulate('click');
            expect(onClose.calledOnce).toBeTruthy();
            expect(handleChangeDialogVisible.calledOnce).toBeTruthy();
        }

        wrapper.setProps({
            dialogVisible: true
        });
        const buttonBroadcast = wrapper.find('.m-article--broadcast button');
        if (buttonBroadcast.length) {
            // @TODO: Adjust expect for enzyme@16
            buttonBroadcast.first().simulate('click');
            expect(onClose.calledTwice).toBeTruthy();
            expect(handleChangeDialogVisible.calledTwice).toBeTruthy();
        }
    });
});
