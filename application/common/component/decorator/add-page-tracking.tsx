/**
 * Es6 module for handling page views.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, Component, ComponentType } from 'react';
import { connect } from 'react-redux';

import { addPageView } from '../../state/page/duck';

type Props = {
    handleAddPageView: () => void;
};

/**
 * The tracking higher order function handling page visits.
 *
 * @param {ReactElement} SourceComponent - The react component to be decorated
 * @returns {ReactElement}
 */
export function addPageTracking(SourceComponent: ComponentType): ComponentType {
    /**
     * Wrapper class to connect to redux and handle tracking action.
     *
     * @augments React.Component
     * @property {Function} props.handleAddPageView - Trigger page view increment
     */
    class AddPageTracking extends Component<Props> {
        /**
         * Invoked once, both on the client and server,
         * immediately before the initial rendering occurs.
         *
         * @returns {void}
         */
        componentDidMount() {
            const { handleAddPageView } = this.props;
            handleAddPageView();
        }

        /**
         * The required render function to return a single react child element.
         *
         * @returns {ReactElement} React component markup
         */
        render() {
            // eslint-disable-next-line react/jsx-props-no-spreading
            return <SourceComponent {...this.props} />;
        }
    }

    /**
     * If an object is passed, each function inside it will be assumed to
     * be a Redux action creator. An object with the same function names,
     * but with every action creator wrapped into a dispatch call so they
     * may be invoked directly, will be merged into the component’s props.
     * If a function is passed, it will be given dispatch.
     *
     * @private
     * @type {object<string, Function>}
     */
    const mapDispatchToProps = {
        handleAddPageView: addPageView
    };

    /**
     * Connects a React component to a Redux store. It does not modify the
     * component class passed to it. Instead, it returns a new, connected component class.
     */
    return connect(null, mapDispatchToProps)(AddPageTracking);
}
