import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { SectionSettings } from '../settings';

describe('SectionSettings', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <SectionSettings content={{}}>
                Section settings children
            </SectionSettings>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
