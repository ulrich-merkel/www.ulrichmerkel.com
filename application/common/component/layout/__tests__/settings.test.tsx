import * as React from 'react';
import PubSub from 'pubsub-js';
import { render } from '../../../../__tests__/utils/test-utils';
import { PUBSUB_COLOR_SCHEME_CHANGE_MESSAGE } from '../../../state/color-scheme/constants';
import { LayoutSettings, LayoutSettingsConnected } from '../settings';
import { PUBSUB_REDUCED_MOTION_CHANGE_MESSAGE } from '../../../state/reduced-motion/constants';

jest.useFakeTimers();

describe('LayoutSettings', function fnDescribe() {
    const props = {
        colorSchemeSelected: 'light',
        reducedMotionSelected: 'no-preference'
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <LayoutSettings {...props}>Hello</LayoutSettings>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly with default props', function fnIt() {
        const { asFragment } = render(<LayoutSettings />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly the connected version', function fnIt() {
        const { asFragment } = render(
            <LayoutSettingsConnected {...props}>Hello</LayoutSettingsConnected>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it(`should trigger ${PUBSUB_COLOR_SCHEME_CHANGE_MESSAGE} correctly`, function fnIt() {
        const handle = jest.fn();
        PubSub.subscribe(PUBSUB_COLOR_SCHEME_CHANGE_MESSAGE, handle);

        const { rerender } = render(
            <LayoutSettings {...props}>Hello</LayoutSettings>
        );
        jest.runAllTimers();
        expect(handle).toHaveBeenCalledTimes(1);

        rerender(
            <LayoutSettings {...props} colorSchemeSelected="dark">
                Hello
            </LayoutSettings>
        );
        jest.runAllTimers();
        expect(handle).toHaveBeenCalledTimes(2);
    });
    it(`should trigger ${PUBSUB_REDUCED_MOTION_CHANGE_MESSAGE} correctly`, function fnIt() {
        const handle = jest.fn();
        PubSub.subscribe(PUBSUB_REDUCED_MOTION_CHANGE_MESSAGE, handle);

        const { rerender } = render(
            <LayoutSettings {...props}>Hello</LayoutSettings>
        );
        jest.runAllTimers();
        expect(handle).toHaveBeenCalledTimes(1);

        rerender(
            <LayoutSettings {...props} reducedMotionSelected="reduce">
                Hello
            </LayoutSettings>
        );
        jest.runAllTimers();
        expect(handle).toHaveBeenCalledTimes(2);
    });
});
