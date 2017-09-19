/* eslint-disable import/no-extraneous-dependencies, func-names */
// @see https://github.com/airbnb/enzyme/issues/426
// @see https://github.com/facebook/jest/issues/1353
import React from 'react';
import renderer from 'react-test-renderer';
import ModuleKeyVisual from '../key-visual';

describe('common/component/module/key-visual', function () {
    const defaultProps = {
        componentType: 'nav',
        className: 'key-visual',
        content: {
            headline: 'headline',
            lead: 'lead',
            btnLabel: 'btnLabel',
            btnTitle: 'btnTitle',
            img: {
                name: '',
                ext: '',
                path: '',
                alt: '',
                sizes: []
            },
            type: 'print'
        }
    };

    it('should render correctly', function () {
        const tree = renderer.create(
            <ModuleKeyVisual
                {...defaultProps}
            >
                Module key-visual children
            </ModuleKeyVisual>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should return null if content image is empty', function () {
        const tree = renderer.create(
            <ModuleKeyVisual
                {...defaultProps}
                content={{
                    img: null
                }}
            >
                Module key-visual children not rendered
            </ModuleKeyVisual>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render isWork and isCovered css className', function () {
        const tree = renderer.create(
            <ModuleKeyVisual
                {...defaultProps}
                isWork
                isCovered
            >
                Module key-visual children
            </ModuleKeyVisual>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
