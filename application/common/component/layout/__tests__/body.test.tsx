import * as React from 'react';
import {
    render,
    screen,
    userEvent
} from '../../../../__tests__/utils/test-utils';
import { LayoutBody, LayoutBodyConnected } from '../body';

describe('LayoutBody', function fnDescribe() {
    const props = {
        content: {},
        onScrollTop: jest.fn(),
        reducedMotionSelectedReduce: false
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <LayoutBody {...props}>Body Children</LayoutBody>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly with default props', function fnIt() {
        const { asFragment } = render(<LayoutBody />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly the connected version', function fnIt() {
        const { asFragment } = render(
            <LayoutBodyConnected {...props}>Body Children</LayoutBodyConnected>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should handle scroll top event correctly', function fnIt() {
        const onScrollTop = jest.fn();
        render(
            <LayoutBody {...props} onScrollTop={onScrollTop}>
                Body Children
            </LayoutBody>
        );

        const button = screen.getByTestId('button-scroll-top');
        userEvent.click(button);
        expect(onScrollTop).toHaveBeenCalled();
    });
});
