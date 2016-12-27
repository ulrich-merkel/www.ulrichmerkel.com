/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../small';

describe('common/component/element/small', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <ComponentToBeTested htmlElement='span' className='small'>
                Small Children
            </ComponentToBeTested>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
