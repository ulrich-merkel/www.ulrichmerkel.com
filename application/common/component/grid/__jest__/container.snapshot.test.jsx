/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../container';

describe('common/component/grid/container', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <ComponentToBeTested htmlElement='span' className='foo'>
                Grid Container Children
            </ComponentToBeTested>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
