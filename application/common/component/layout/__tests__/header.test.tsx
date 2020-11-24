import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { LayoutHeader, LayoutHeaderConnected } from '../header';

describe('LayoutHeader', function fnDescribe() {
    const defaultProps = {
        handleIntlChangeLocale: jest.fn(),
        content: {
            menu: {}
        },
        className: 'layout-header'
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <LayoutHeader {...defaultProps}>Header Children</LayoutHeader>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly the connected version', function fnIt() {
        const { asFragment } = render(
            <LayoutHeaderConnected {...defaultProps}>
                Header Children
            </LayoutHeaderConnected>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
