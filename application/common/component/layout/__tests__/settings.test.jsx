import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { LayoutSettings, LayoutSettingsConnected } from '../settings';

describe('LayoutSettings', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(<LayoutSettings>Hello</LayoutSettings>);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly the connected version', function fnIt() {
        const { asFragment } = render(
            <LayoutSettingsConnected>Hello</LayoutSettingsConnected>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
