/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../legend';

describe('common/component/element/legend', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <ComponentToBeTested className='legend'>
                Legend Children
            </ComponentToBeTested>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
