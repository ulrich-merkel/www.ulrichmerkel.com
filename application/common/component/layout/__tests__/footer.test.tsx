import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { LayoutFooter, LayoutFooterConnected } from '../footer';

describe('LayoutFooter', function fnDescribe() {
    const props = {
        handleScrollTop: jest.fn(),
        content: {
            footer: 'test'
        },
        className: 'layout-footer'
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <LayoutFooter {...props}>Footer Children</LayoutFooter>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly with default props', function fnIt() {
        const { asFragment } = render(<LayoutFooter />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly the connected version', function fnIt() {
        const { asFragment } = render(
            <LayoutFooterConnected {...props}>
                Footer Children
            </LayoutFooterConnected>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
