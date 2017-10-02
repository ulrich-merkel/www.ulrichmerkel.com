/* eslint-disable import/no-extraneous-dependencies, func-names */
import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import mockedWindowEvents from '../../../__mocks__/window-events';
import ModuleKeyVisualPicture from '../picture';

describe('common/component/layout/body', function () {
    const defaultProps = {
        img: {
            name: 'keyvisual',
            ext: 'jpg',
            path: '/img/content/home/',
            alt: 'foo',
            sizes: [
                {
                    width: 2560,
                    height: 1600,
                    minWidth: 2560
                },
                {
                    width: 1680,
                    height: 1050,
                    minWidth: 1680
                },
                {
                    width: 1440,
                    height: 960,
                    minWidth: 1440
                }
            ]
        },
        type: 'digital',
        isCovered: true
    };

    it('should handle resize events correctly', function () {
        const onResize = sinon.spy(ModuleKeyVisualPicture.prototype, 'onResize');
        const wrapper = mount(
            <ModuleKeyVisualPicture {...defaultProps} />
        );

        mockedWindowEvents.resize();
        expect(wrapper.find('.m-key-visual__image[style]').length).toEqual(1);
        expect(onResize.called).toBeTruthy();
        wrapper.unmount();
    });
});
