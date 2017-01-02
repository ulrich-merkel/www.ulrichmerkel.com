/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ElementLabel from './../label';

describe('common/component/element/label', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <ElementLabel className='label' htmlFor='foo-bar'>
                Label Children
            </ElementLabel>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
