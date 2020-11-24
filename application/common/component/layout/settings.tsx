/**
 * Es6 module for handling theming as component.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, Component, Fragment, ReactNode } from 'react';
import { connect } from 'react-redux';
import PubSub from 'pubsub-js';

import {
    PUBSUB_COLOR_SCHEME_CHANGE_MESSAGE,
    COLOR_SCHEME_LIGHT
} from '../../state/color-scheme/duck';
import { selectStateColorSchemeSelected } from '../../state/color-scheme/selector';
import { selectStateReducedMotionSelected } from '../../state/reduced-motion/selector';
import {
    MOTION_PREFERENCES_NO_PREFERENCE,
    PUBSUB_REDUCED_MOTION_CHANGE_MESSAGE
} from '../../state/reduced-motion/duck';

type Props = {
    children?: ReactNode;
    colorSchemeSelected: string;
    reducedMotionSelected: string;
};

/**
 * Apply theming and settings.
 *
 * @augments React.Component
 * @property {ReactElement} props.children - Component childs to be rendered
 * @property {string} props.colorSchemeSelected - Current selected color scheme
 * @property {string} props.reducedMotionSelected - Current selected reduced motion
 */
export class LayoutSettings extends Component<Props> {
    /**
     * Invoked once, only on the client (not on the server),
     * immediately after the initial rendering occurs.
     *
     * @returns {void}
     */
    componentDidMount() {
        const {
            colorSchemeSelected = COLOR_SCHEME_LIGHT,
            reducedMotionSelected = MOTION_PREFERENCES_NO_PREFERENCE
        } = this.props;

        PubSub.publish(PUBSUB_COLOR_SCHEME_CHANGE_MESSAGE, colorSchemeSelected);
        PubSub.publish(
            PUBSUB_REDUCED_MOTION_CHANGE_MESSAGE,
            reducedMotionSelected
        );
    }

    /**
     * Invoked immediately after the component's updates are flushed to
     * the DOM. This method is not called for the initial render.
     *
     * @param {object} prevProps - The old component properties
     * @returns {void}
     */
    componentDidUpdate(prevProps) {
        const {
            colorSchemeSelected = COLOR_SCHEME_LIGHT,
            reducedMotionSelected = MOTION_PREFERENCES_NO_PREFERENCE
        } = this.props;

        if (colorSchemeSelected !== prevProps.colorSchemeSelected) {
            PubSub.publish(
                PUBSUB_COLOR_SCHEME_CHANGE_MESSAGE,
                colorSchemeSelected
            );
        }
        if (reducedMotionSelected !== prevProps.reducedMotionSelected) {
            PubSub.publish(
                PUBSUB_REDUCED_MOTION_CHANGE_MESSAGE,
                reducedMotionSelected
            );
        }
    }

    /**
     * The required render function to return a single react child element.
     *
     * @returns {ReactElement} React component markup
     */
    render() {
        const { children } = this.props;

        return <Fragment>{children}</Fragment>;
    }
}

/**
 * The component will subscribe to Redux store updates. Any time it updates,
 * mapStateToProps will be called, Its result must be a plain object,
 * and it will be merged into the component’s props.
 *
 * @private
 * @param {object<string, *>} state - The current redux store state
 * @returns {object<string, *>} The mapped state properties
 */
function mapStateToProps(state) {
    return {
        colorSchemeSelected: selectStateColorSchemeSelected(state),
        reducedMotionSelected: selectStateReducedMotionSelected(state)
    };
}

/**
 * Connects a React component to a Redux store. It does not modify the
 * component class passed to it. Instead, it returns a new, connected component class.
 *
 * @type {ReactElement}
 */
export const LayoutSettingsConnected = connect(mapStateToProps)(LayoutSettings);
