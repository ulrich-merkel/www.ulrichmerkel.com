/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../image';

describe('common/component/element/image', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <ComponentToBeTested src='span' className='image' alt='foo' />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
