/* eslint-disable import/no-extraneous-dependencies, import/no-named-as-default, func-names */
import 'jsdom-global/register';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import sinon from 'sinon';

import mockedStore from '../../__mocks__/store';
import { LayoutBody } from '../body';

describe('common/component/layout/body', function () {
    const defaultProps = {
        content: {
            footer: 'foo'
        }
    };

    it('should render correctly', function () {
        const wrapper = mount(
            <Provider store={mockedStore}>
                <MemoryRouter>
                    <LayoutBody {...defaultProps}>
                        <div className='test'>Body Children</div>
                    </LayoutBody>
                </MemoryRouter>
            </Provider>
        );
        expect(wrapper.find('.test').length).toEqual(1);
    });
    it('should trigger shouldComponentUpdate', function () {
        const shouldComponentUpdate = sinon.spy(LayoutBody.prototype, 'shouldComponentUpdate');

        const wrapper = mount(
            <Provider store={mockedStore}>
                <MemoryRouter>
                    <LayoutBody {...defaultProps}>
                        <div className='test'>Body Children</div>
                    </LayoutBody>
                </MemoryRouter>
            </Provider>
        );

        expect(shouldComponentUpdate.calledOnce).toBeFalsy();
        wrapper.setProps({
            content: {
                footer: 'bar'
            }
        });
        expect(shouldComponentUpdate.calledOnce).toBeTruthy();
    });
    it('should trigger handleScrollTop callback', function () {
        const handleScrollTop = sinon.spy(LayoutBody.prototype, 'handleScrollTop');

        const wrapper = mount(
            <Provider store={mockedStore}>
                <MemoryRouter>
                    <LayoutBody {...defaultProps}>
                        <div className='test'>Body Children</div>
                    </LayoutBody>
                </MemoryRouter>
            </Provider>
        );

        const footerButton = wrapper.find('.l-footer__button--up');
        expect(handleScrollTop.calledOnce).toBeFalsy();
        // @TODO: Adjust expect for enzyme@16
        footerButton.first().simulate('click');
        expect(handleScrollTop.calledOnce).toBeTruthy();
    });
});
