import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { LayoutHeaderAside, LayoutHeaderAsideConnected } from '../aside';

describe('LayoutHeaderAside', function fnDescribe() {
    const props = {
        className: 'layout-header',
        content: {},
        intlAvailableLocales: ['en-EN', 'de-DE'],
        intlLocale: 'de-DE',
        onChangeDialogVisibleSearch: jest.fn(),
        onChangeDialogVisibleTheme: jest.fn(),
        onChangeIntlLocale: jest.fn()
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <LayoutHeaderAside {...props}>Header Children</LayoutHeaderAside>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly the connected version', function fnIt() {
        const { asFragment } = render(
            <LayoutHeaderAsideConnected {...props}>
                Header Children
            </LayoutHeaderAsideConnected>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
