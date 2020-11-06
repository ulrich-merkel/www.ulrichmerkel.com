import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { GridSection } from '../section';

describe('GridSection', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <GridSection>Grid Section Children</GridSection>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
