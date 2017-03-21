/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import { shallow } from 'enzyme';
import ElementInputGroup from './../input-group';

describe('common/component/element/input-group', function () {
    it('should render correctly', function () {
        const wrapper = shallow(
            <ElementInputGroup
                id='input-group'
                name='input'
                className='input-group'
                label='input'
                type='submit'
                value='2'
                isValid
                isPristine

            >
                Input Group Children
            </ElementInputGroup>
        );
        expect(wrapper.html()).toMatchSnapshot();

        wrapper.setProps({
            placeholder: 'placeholder',
            isLabelVisuallyHidden: true
        });
        expect(wrapper.html()).toMatchSnapshot();
    });
});
