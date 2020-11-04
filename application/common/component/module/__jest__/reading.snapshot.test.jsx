/* eslint-disable import/no-extraneous-dependencies, func-names */
// @see https://github.com/airbnb/enzyme/issues/426
// @see https://github.com/facebook/jest/issues/1353
import * as React from 'react';
import renderer from 'react-test-renderer';
import ModuleReading from '../reading';

describe('component/module/reading', function () {
    const defaultProps = {
        componentType: 'menu',
        className: 'foo',
        isCentered: true,
        content: {
            list: [
                {
                    headline: 'headline',
                    lead: 'lead',
                    creator: 'creator',
                    publisher: 'publisher'
                },
                {
                    headline: 'headline',
                    lead: 'lead',
                    creator: 'creator',
                    publisher: 'publisher'
                }
            ]
        }
    };

    it('should render correctly', function () {
        const tree = renderer
            .create(
                <ModuleReading {...defaultProps}>
                    Module reading children
                </ModuleReading>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should return null if no content is given', function () {
        const tree = renderer
            .create(
                <ModuleReading
                    {...defaultProps}
                    content={{
                        list: null
                    }}
                >
                    Module reading children not rendered
                </ModuleReading>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render no itemType if unset', function () {
        const tree = renderer
            .create(
                <ModuleReading {...defaultProps} itemType={null}>
                    Module reading children
                </ModuleReading>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
