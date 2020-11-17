import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { ModuleFeaturedItem } from '../item';

describe('ModuleFeaturedItem', function fnDescribe() {
    const defaultProps = {
        path: '/work/test',
        headline: 'Featured item work headline',
        img: {}
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <ModuleFeaturedItem {...defaultProps}>
                Module featured item children
            </ModuleFeaturedItem>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
