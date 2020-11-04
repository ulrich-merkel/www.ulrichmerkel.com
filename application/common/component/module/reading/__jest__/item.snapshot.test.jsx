/* eslint-disable import/no-extraneous-dependencies, func-names */
import * as React from 'react';
import renderer from 'react-test-renderer';
import ModuleReadingItem from '../item';

describe('common/component/module/reading/item', function () {
    const defaultProps = {
        headline: 'Headline reading',
        lead: 'Lead reading',
        creator: 'Creator',
        publisher: 'Publisher'
    };

    it('should render correctly', function () {
        const tree = renderer.create(
            <ModuleReadingItem
                {...defaultProps}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
