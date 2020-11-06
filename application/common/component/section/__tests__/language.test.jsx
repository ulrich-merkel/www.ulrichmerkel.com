import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { SectionLanguage } from '../language';

describe('SectionLanguage', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <SectionLanguage content={{}}>
                Section language children
            </SectionLanguage>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
