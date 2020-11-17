import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { SectionFeatured } from '../featured';

describe('SectionFeatured', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <SectionFeatured content={{}}>
                Section featured children
            </SectionFeatured>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
