/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ElementNav from '../nav';

describe('common/component/element/nav', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <ElementNav htmlElement='div' className='nav' />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
