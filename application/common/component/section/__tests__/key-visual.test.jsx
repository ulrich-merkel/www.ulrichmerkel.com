import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { SectionKeyVisual } from '../key-visual';

describe('SectionKeyVisual', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <SectionKeyVisual content={{}}>
                Section key-visual children
            </SectionKeyVisual>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
