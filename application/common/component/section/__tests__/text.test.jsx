import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { SectionText } from '../text';

describe('SectionText', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <SectionText content={{}} isMain>
                Section text children
            </SectionText>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
