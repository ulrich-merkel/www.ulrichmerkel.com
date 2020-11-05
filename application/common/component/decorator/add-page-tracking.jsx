/* eslint-disable immutable/no-this */
/**
 * Es6 module for handling page views.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @see {@link https://blog.risingstack.com/react-js-best-practices-for-2016/}
 *
 * @requires react
 * @requires prop-types
 * @requires react-redux
 * @requires common/state/page/actions
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import { default as React, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addPageView } from '../../state/page/actions';

/**
 * The tracking higher order function handling page visits.
 *
 * @param {ReactElement} SourceComponent - The react component to be decorated
 * @returns {ReactElement}
 */
function addPageTracking(SourceComponent) {
    /**
     * Wrapper class to connect to redux and handle tracking action.
     *
     * @augments React.Component
     * @property {Function} props.handleAddPageView - Trigger page view increment
     */
    class AddPageTracking extends Component {
        /**
         * Invoked once, both on the client and server,
         * immediately before the initial rendering occurs.
         *
         * @returns {void}
         */
        // eslint-disable-next-line camelcase
        UNSAFE_componentWillMount() {
            // eslint-disable-next-line react/destructuring-assignment
            this.props.handleAddPageView();
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
     * Validate props via React.PropTypes helpers.
     *
     * @static
     * @type {object}
     */
    // eslint-disable-next-line immutable/no-mutation
    AddPageTracking.propTypes = {
        handleAddPageView: PropTypes.func.isRequired
    };

    /**
     * Connects a React component to a Redux store. It does not modify the
     * component class passed to it. Instead, it returns a new, connected component class.
     */
    return connect(null, {
        handleAddPageView: addPageView
    })(AddPageTracking);
}

export default addPageTracking;
