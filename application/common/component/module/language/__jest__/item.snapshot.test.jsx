/* eslint-disable import/no-extraneous-dependencies, func-names */
import * as React from 'react';
import renderer from 'react-test-renderer';
import ModuleLanguageItem from '../item';

describe('common/component/module/language/item', function () {
    const defaultProps = {
        headline: 'Headline language',
        lead: 'Lead language',
        percent: '70'
    };

    it('should render correctly', function () {
        const tree = renderer.create(
            <ModuleLanguageItem
                {...defaultProps}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
