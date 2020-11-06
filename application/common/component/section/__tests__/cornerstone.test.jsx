import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { SectionCornerstone } from '../cornerstone';

describe('SectionCornerstone', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <SectionCornerstone content={{}}>
                Section cornerstone children
            </SectionCornerstone>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
