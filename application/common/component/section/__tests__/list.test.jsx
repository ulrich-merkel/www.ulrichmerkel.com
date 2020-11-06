import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { SectionList } from '../list';

describe('SectionList', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <SectionList content={{}} isMain>
                Section list children
            </SectionList>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
