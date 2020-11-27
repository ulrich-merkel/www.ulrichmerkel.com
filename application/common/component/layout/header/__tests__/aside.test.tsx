import * as React from 'react';
import {
    render,
    screen,
    userEvent
} from '../../../../../__tests__/utils/test-utils';
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
    it('should render correctly with default props', function fnIt() {
        const { asFragment } = render(<LayoutHeaderAside />);
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
    it('should show search dialog', function fnIt() {
        const onChangeDialogVisibleSearch = jest.fn();
        render(
            <LayoutHeaderAside
                {...props}
                {...{ onChangeDialogVisibleSearch }}
            />
        );

        const button = screen.getByTestId('button-search');
        userEvent.click(button);
        expect(onChangeDialogVisibleSearch).toHaveBeenCalled();
    });
    it('should show settings dialog', function fnIt() {
        const onChangeDialogVisibleTheme = jest.fn();
        render(
            <LayoutHeaderAside {...props} {...{ onChangeDialogVisibleTheme }} />
        );

        const button = screen.getByTestId('button-settings');
        userEvent.click(button);
        expect(onChangeDialogVisibleTheme).toHaveBeenCalled();
    });
    it('should change languages', function fnIt() {
        const onChangeIntlLocale = jest.fn();
        render(<LayoutHeaderAside {...props} {...{ onChangeIntlLocale }} />);

        const button = screen.getByTestId('button-language-de');
        userEvent.click(button);
        expect(onChangeIntlLocale).toHaveBeenCalled();
    });
});
