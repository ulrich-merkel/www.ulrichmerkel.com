/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../label';

describe('common/component/element/label', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <ComponentToBeTested className='label' htmlFor='foo-bar'>
                Label Children
            </ComponentToBeTested>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
