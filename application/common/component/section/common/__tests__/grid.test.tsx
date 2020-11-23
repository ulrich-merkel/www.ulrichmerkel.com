import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { SectionCommonGrid } from '../grid';

describe('SectionCommonGrid', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <SectionCommonGrid
                page={{
                    viewsAfterReload: 1
                }}
            >
                Section common grid children
            </SectionCommonGrid>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
