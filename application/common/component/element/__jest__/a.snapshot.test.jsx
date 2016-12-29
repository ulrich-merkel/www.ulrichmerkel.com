/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ElementA from './../a';

describe('common/component/element/a', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <ElementA to='testpage' className='link' title='title' lang='lang'>
                Link Children
            </ElementA>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
