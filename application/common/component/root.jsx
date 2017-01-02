/**
 * Es6 module as the root component for the react application.
 *
 * @file
 * @module
 * @flow weak
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.2
 *
 * @requires react
 * @requires react-redux
 *
 * @changelog
 * - 0.0.2 Moved redux store initialization to server files
 * - 0.0.1 Basic functions and structure
 */
import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';

/**
 * Function representing the react redux root.
 *
 * @function
 * @param {Object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
function Root(props) {
    const { children, store } = props;

    return (
        <Provider {...{ store }}>
            {children}
        </Provider>
    );
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {Array|string} children - Required due to Provider
 * @property {Object} store - Redux store state
 */
Root.propTypes = {
    children: PropTypes.node.isRequired,
    store: PropTypes.object.isRequired
};

export default Root;
