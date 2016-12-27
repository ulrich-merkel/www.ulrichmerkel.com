/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../nav';

describe('common/component/element/nav', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <ComponentToBeTested htmlElement='div' className='nav' />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
