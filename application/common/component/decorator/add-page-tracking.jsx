/**
 * Es6 module for handling translation data.
 * Higher-Order Components (HOCs) and decorators are JavaScript functions
 * which add functionality to existing component classes.
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
 * @requires react-redux
 * @requires lodash
 * @requires common/state/page/actions
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { addPageView } from './../../state/page/actions';

/**
 * The tracking higher order function handling page visits.
 *
 * @function
 * @param {Object} SourceComponent - The react component to be decorated
 * @returns {ReactElement}
 */
function addPageTracking(SourceComponent) {

    /**
     * Wrapper class to connect to redux and handle tracking action.
     *
     * @class
     * @extends React.Component
     */
    class AddPageTracking extends Component {

        /**
         * Invoked once, both on the client and server,
         * immediately before the initial rendering occurs.
         *
         * @function
         * @returns {void}
         */
        componentWillMount() {
            this.props.handleAddPageView();
        }

        /**
         * The required render function to return a single react child element.
         *
         * @function
         * @returns {ReactElement} React component markup
         */
        render() {
            return <SourceComponent {...this.props} />;
        }

    }

    /**
     * Validate props via React.PropTypes helpers.
     *
     * @static
     * @type {Object}
     * @property {Function} handleAddPageView - Trigger page view increment
     */
    AddPageTracking.propTypes = {
        handleAddPageView: PropTypes.func
    };

    /**
     * Connects a React component to a Redux store. It does not modify the
     * component class passed to it. Instead, it returns a new, connected component class.
     */
    return connect(
        null,
        {
            handleAddPageView: addPageView
        }
    )(AddPageTracking);

}

export default addPageTracking;
