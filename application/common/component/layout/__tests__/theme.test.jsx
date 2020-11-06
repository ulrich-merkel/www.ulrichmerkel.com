import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { LayoutTheme, LayoutThemeConnected } from '../theme';

describe('LayoutTheme', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(<LayoutTheme>Hello</LayoutTheme>);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly the connected version', function fnIt() {
        const { asFragment } = render(
            <LayoutThemeConnected>Hello</LayoutThemeConnected>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
