/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ModuleFeatured from './../featured';

describe('common/component/module/featured', function () {
    const defaultProps = {
        componentType: 'span',
        className: 'foo',
        content: {
            list: [
                {
                    path: 'path/',
                    headline: 'headline',
                    lead: 'lead',
                    img: {}
                }
            ]
        }
    };

    it('should render correctly', function () {
        const tree = renderer.create(
            <ModuleFeatured
                {...defaultProps}
            >
                Module Featured Children
            </ModuleFeatured>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should return null if no content is empty', function () {
        const tree = renderer.create(
            <ModuleFeatured
                {...defaultProps}
                content={{
                    list: null
                }}
            >
                Module featured children not rendered
            </ModuleFeatured>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render no itemType if unset', function () {
        const tree = renderer.create(
            <ModuleFeatured
                {...defaultProps}
                itemType={null}
            >
                Module featured children
            </ModuleFeatured>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
