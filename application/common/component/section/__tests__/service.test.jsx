import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { SectionService } from '../service';

describe('SectionService', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <SectionService content={{}}>
                Section service children
            </SectionService>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
