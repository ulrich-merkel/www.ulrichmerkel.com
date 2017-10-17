/* eslint-disable import/no-extraneous-dependencies, func-names */
// @see https://github.com/airbnb/enzyme/issues/426
// @see https://github.com/facebook/jest/issues/1353
import React from 'react';
import renderer from 'react-test-renderer';
import ModuleService from '../service';

describe('common/component/module/service', function () {
    const defaultProps = {
        componentType: 'nav',
        className: 'foo',
        content: {
            list: [
                {
                    icon: 'happy',
                    headline: 'headline happy',
                    text: 'text happy'
                },
                {
                    icon: 'xing',
                    headline: 'headline xing',
                    text: 'text xing'
                },
                {
                    icon: 'facebook',
                    headline: 'headline facebook',
                    text: 'text facebook'
                }
            ]
        }
    };

    it('should render correctly', function () {
        const tree = renderer.create(
            <ModuleService
                {...defaultProps}
            >
                Module service children
            </ModuleService>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should return null if no content is given', function () {
        const tree = renderer.create(
            <ModuleService
                {...defaultProps}
                content={{
                    list: null
                }}
            >
                Module service children not rendered
            </ModuleService>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render no itemType if unset', function () {
        const tree = renderer.create(
            <ModuleService
                {...defaultProps}
                itemType={null}
            >
                Module service children
            </ModuleService>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
