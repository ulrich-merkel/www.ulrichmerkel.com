/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ElementSmall from '../small';

describe('common/component/element/small', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <ElementSmall htmlElement='span' className='small'>
                Small Children
            </ElementSmall>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
