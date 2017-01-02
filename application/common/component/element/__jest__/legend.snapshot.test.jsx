/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ElementLegend from './../legend';

describe('common/component/element/legend', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <ElementLegend className='legend'>
                Legend Children
            </ElementLegend>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
