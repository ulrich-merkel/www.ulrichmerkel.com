/* eslint-disable import/no-extraneous-dependencies, import/no-named-as-default, func-names */
import 'jsdom-global/register';
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import sinon from 'sinon';

import mockedStore from './../../__mocks__/store';
import LayoutHeader from './../header';

describe('common/component/layout/header', function () {
    it('should trigger shouldComponentUpdate', function () {
        const defaultProps = {
            handleIntlChangeLocale: sinon.spy(),
            content: {
                menu: {}
            },
            className: 'layout-header'
        };

        const wrapper = mount(
            <Provider store={mockedStore}>
                <LayoutHeader {...defaultProps}>
                    Header Children
                </LayoutHeader>
            </Provider>
        );

        wrapper.find('.m-menu__item--en').simulate('click');
        wrapper.find('.m-menu__list-item .m-menu__item').simulate('click');
    });
});
