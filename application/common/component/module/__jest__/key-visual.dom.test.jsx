/* eslint-disable import/no-extraneous-dependencies, import/no-named-as-default, func-names */
import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import ModuleKeyVisual from './../key-visual';

describe('common/component/module/key-visual', function () {
    const defaultProps = {
        componentType: 'nav',
        className: 'key-visual-dom',
        content: {
            headline: 'headline',
            lead: 'lead',
            btnLabel: 'btnLabel',
            btnTitle: 'btnTitle',
            img: {
                name: '',
                ext: '',
                path: '',
                alt: '',
                sizes: []
            },
            type: 'type'
        }
    };

    it('should trigger onClickBtn', function () {
        const onClickBtn = sinon.spy(ModuleKeyVisual.prototype, 'onClickBtn');

        const wrapper = mount(
            <ModuleKeyVisual {...defaultProps}>
                Module key-visual children
            </ModuleKeyVisual>
        );

        wrapper.find('.m-key-visual__button--down').simulate('click');
        expect(onClickBtn.calledOnce).toBeTruthy();
    });
});
