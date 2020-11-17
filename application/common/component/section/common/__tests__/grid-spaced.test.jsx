import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { SectionCommonGridSpaced } from '../grid-spaced';

describe('SectionCommonGridSpaced', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <SectionCommonGridSpaced
                page={{
                    viewsAfterReload: 1
                }}
            >
                Section common grid spaced children
            </SectionCommonGridSpaced>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
