/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../row';

describe('common/component/grid/row', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <ComponentToBeTested htmlElement='span' className='row'>
                Grid Row Children
            </ComponentToBeTested>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
