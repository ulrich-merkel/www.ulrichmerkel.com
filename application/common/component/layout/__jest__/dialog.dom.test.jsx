/* eslint-disable import/no-extraneous-dependencies, func-names */
import 'jsdom-global/register';
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import sinon from 'sinon';

import mockedStore from './../../__mocks__/store';
import mockedWindowEvents from './../../__mocks__/window-events';
import LayoutDialogContainer, { LayoutDialog } from './../dialog';

describe('common/component/layout/body', function () {
    const defaultProps = {
        content: {
            foo: 'bar'
        },
        dialogVisible: true,
        handleChangeDialogVisible: Function.prototype
    };

    it('should trigger shouldComponentUpdate', function () {
        const shouldComponentUpdate = sinon.spy(LayoutDialogContainer.prototype, 'shouldComponentUpdate');

        const wrapper = mount(
            <Provider store={mockedStore}>
                <LayoutDialogContainer {...defaultProps}>
                    Dialog Children
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
        const onClose = sinon.spy(LayoutDialog.prototype, 'onKeyDown');
        const handleChangeDialogVisible = sinon.spy();

        const wrapper = mount(
            <LayoutDialog {...defaultProps} handleChangeDialogVisible={handleChangeDialogVisible}>
                Dialog Children
            </LayoutDialog>
        );

        mockedWindowEvents.keydown({ keyCode: 27 });
        expect(onClose.calledOnce).toBeTruthy();
        expect(handleChangeDialogVisible.calledOnce).toBeTruthy();
        wrapper.unmount();
        expect(onClose.calledTwice).toBeFalsy();
    });
    it('should handle onClose click events correctly', function () {
        const onClose = sinon.spy(LayoutDialog.prototype, 'onClose');
        const handleChangeDialogVisible = sinon.spy();

        const wrapper = mount(
            <LayoutDialog {...defaultProps} handleChangeDialogVisible={handleChangeDialogVisible}>
                Dialog Children
            </LayoutDialog>
        );

        wrapper.find('.l-dialog__button--close').simulate('click');
        expect(onClose.calledOnce).toBeTruthy();
        expect(handleChangeDialogVisible.calledOnce).toBeTruthy();

        wrapper.setProps({
            dialogVisible: true
        });
        wrapper.find('.m-article--broadcast button').simulate('click');
        expect(onClose.calledTwice).toBeTruthy();
        expect(handleChangeDialogVisible.calledTwice).toBeTruthy();
    });
});
