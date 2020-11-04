/* eslint-disable import/no-extraneous-dependencies, func-names */
import * as React from 'react';
import renderer from 'react-test-renderer';
import ModuleServiceItem from '../item';

describe('common/component/module/service/item', function () {
    const defaultProps = {
        headline: 'Headline service',
        text: 'Text service',
        index: 1,
        icon: 'foo'
    };

    it('should render correctly', function () {
        const tree = renderer.create(
            <ModuleServiceItem
                {...defaultProps}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render isClear correctly', function () {
        const tree = renderer.create(
            <ModuleServiceItem
                {...defaultProps}
                isClear
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
