import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { LayoutHeader, LayoutHeaderConnected } from '../header';

describe('LayoutHeader', function fnDescribe() {
    const props = {
        className: 'layout-header',
        content: {},
        headerFixed: true,
        headerVisible: true,
        intlAvailableLocales: ['DE-de', 'EN-en'],
        intlLocale: 'DE-de',
        onChangeDialogVisibleSearch: jest.fn(),
        onChangeDialogVisibleTheme: jest.fn(),
        onChangeIntlLocale: jest.fn()
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <LayoutHeader {...props}>Header Children</LayoutHeader>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly with default props', function fnIt() {
        const { asFragment } = render(<LayoutHeader />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly the connected version', function fnIt() {
        const { asFragment } = render(
            <LayoutHeaderConnected {...props}>
                Header Children
            </LayoutHeaderConnected>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
