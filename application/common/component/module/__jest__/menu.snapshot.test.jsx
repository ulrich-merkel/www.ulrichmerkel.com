/* eslint-disable import/no-extraneous-dependencies, func-names */
// @see https://github.com/airbnb/enzyme/issues/426
// @see https://github.com/facebook/jest/issues/1353
import React from 'react';
import renderer from 'react-test-renderer';
import ModuleMenu from '../menu';

describe('common/component/module/menu', function () {
    const defaultProps = {
        componentType: 'ol',
        className: 'module-menu',
        content: {
            name: 'bar',
            list: [
                {
                    path: '/foo',
                    title: 'title',
                    label: 'label',
                    itemType: 'foo',
                    icon: 'icon',
                    itemPropA: 'bar',
                    metaLinkUrl: '/test'
                },
                {
                    path: '/foo',
                    title: 'title',
                    isLabelHidden: true
                },
                {
                    path: '/foo',
                    title: 'title'
                }
            ]
        }
    };

    it('should render correctly', function () {
        const tree = renderer.create(
            <ModuleMenu
                {...defaultProps}
            >
                Module menu children
            </ModuleMenu>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should return null if content image is empty', function () {
        const tree = renderer.create(
            <ModuleMenu
                {...defaultProps}
                content={{
                    list: null
                }}
            >
                Module menu children not rendered
            </ModuleMenu>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render no itemType if unset', function () {
        const tree = renderer.create(
            <ModuleMenu
                {...defaultProps}
                itemType={null}
            >
                Module menu children
            </ModuleMenu>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
