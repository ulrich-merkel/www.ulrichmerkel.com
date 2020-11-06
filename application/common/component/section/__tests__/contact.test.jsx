import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { SectionContact } from '../contact';

describe('SectionContact', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <SectionContact content={{}} isMain>
                Section contact children
            </SectionContact>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
