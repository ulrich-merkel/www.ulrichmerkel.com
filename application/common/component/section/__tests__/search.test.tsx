import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { SectionSearch } from '../search';

describe('SectionSearch', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <SectionSearch content={{}} isMain>
                Section search children
            </SectionSearch>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
