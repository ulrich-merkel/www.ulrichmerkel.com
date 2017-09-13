/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import { shallow } from 'enzyme';
import ElementLabel from '../label';

describe('common/component/element/label', function () {
    it('should render correctly', function () {
        const wrapper = shallow(
            <ElementLabel className='label' htmlFor='foo-bar'>
                Label Children
            </ElementLabel>
        );
        expect(wrapper.html()).toMatchSnapshot();

        wrapper.setProps({
            isVisuallyHidden: true
        });
        expect(wrapper.html()).toMatchSnapshot();
    });
});
