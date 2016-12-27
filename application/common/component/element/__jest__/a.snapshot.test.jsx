/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../a';

describe('common/component/element/a', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <ComponentToBeTested to='testpage' className='link' title='title' lang='lang'>
                Link Children
            </ComponentToBeTested>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
