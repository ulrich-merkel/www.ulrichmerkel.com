/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import { shallow } from 'enzyme';
import ElementLegend from '../legend';

describe('common/component/element/legend', function () {
    it('should render correctly', function () {
        const wrapper = shallow(
            <ElementLegend className='legend'>
                Legend Children
            </ElementLegend>
        );
        expect(wrapper.html()).toMatchSnapshot();

        wrapper.setProps({
            isVisuallyHidden: true
        });
        expect(wrapper.html()).toMatchSnapshot();
    });
});
