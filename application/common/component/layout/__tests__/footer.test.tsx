import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { LayoutFooter, LayoutFooterConnected } from '../footer';

describe('LayoutFooter', function fnDescribe() {
    const defaultProps = {
        handleScrollTop: jest.fn(),
        content: {
            footer: 'test'
        },
        className: 'layout-footer'
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <LayoutFooter {...defaultProps}>Footer Children</LayoutFooter>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly the connected version', function fnIt() {
        const { asFragment } = render(
            <LayoutFooterConnected {...defaultProps}>
                Footer Children
            </LayoutFooterConnected>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
