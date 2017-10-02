/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ModuleMenuItem from '../item';

describe('common/component/module/menu/item', function () {
    const defaultProps = {
        path: 'path',
        title: 'Menu item title',
        label: 'Menu item label',
        itemType: 'itemType',
        icon: 'foo',
        itemPropA: 'bar'
    };

    it('should render correctly', function () {
        const tree = renderer.create(
            <ModuleMenuItem
                {...defaultProps}
            >
                Module menu item children
            </ModuleMenuItem>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should return null if no path is given', function () {
        const tree = renderer.create(
            <ModuleMenuItem
                {...defaultProps}
                path={null}
            >
                Module menu item children not rendered
            </ModuleMenuItem>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should hide label if isLabelHidden is present', function () {
        const tree = renderer.create(
            <ModuleMenuItem
                {...defaultProps}
                isLabelHidden
            >
                Module menu item children
            </ModuleMenuItem>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
