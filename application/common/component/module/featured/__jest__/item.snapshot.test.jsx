/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ModuleFeaturedItem from '../item';

describe('common/component/module/featured/item', function () {
    const defaultProps = {
        path: '/work/test',
        headline: 'Featured item work headline',
        img: {}
    };

    it('should render correctly', function () {
        const tree = renderer.create(
            <ModuleFeaturedItem
                {...defaultProps}
            >
                Module featured item children
            </ModuleFeaturedItem>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
