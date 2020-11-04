/* eslint-disable import/no-extraneous-dependencies, func-names */
// @see https://github.com/airbnb/enzyme/issues/426
// @see https://github.com/facebook/jest/issues/1353
import * as React from 'react';
import renderer from 'react-test-renderer';
import ModuleLanguage from '../language';

describe('common/component/module/language', function () {
    const defaultProps = {
        componentType: 'span',
        className: 'foo',
        content: {
            list: [
                {
                    headline: 'foo1',
                    lead: 'bar1',
                    percent: '1'
                },
                {
                    headline: 'foo2',
                    lead: 'bar2',
                    percent: '20'
                },
                {
                    headline: 'foo3',
                    lead: 'bar3',
                    percent: '80'
                }
            ]
        }
    };

    it('should render correctly', function () {
        const tree = renderer.create(
            <ModuleLanguage
                {...defaultProps}
            >
                Module language children
            </ModuleLanguage>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should return null if no content image is empty', function () {
        const tree = renderer.create(
            <ModuleLanguage
                {...defaultProps}
                content={{
                    list: null
                }}
            >
                Module language children not rendered
            </ModuleLanguage>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render no itemType if unset', function () {
        const tree = renderer.create(
            <ModuleLanguage
                {...defaultProps}
                itemType={null}
            >
                Module language children
            </ModuleLanguage>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
