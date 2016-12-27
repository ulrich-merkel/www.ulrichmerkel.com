/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../form';

describe('common/component/element/form', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <ComponentToBeTested
                action='test'
                id='form'
                className='form'
                data-test='form-data'
            >
                Form Content Children
            </ComponentToBeTested>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
