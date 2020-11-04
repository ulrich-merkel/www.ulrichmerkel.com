/* eslint-disable immutable/no-mutation */
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
 * @requires prop-types
 * @requires react-redux
 *
 * @changelog
 * - 0.0.2 Moved redux store initialization to server files
 * - 0.0.1 Basic functions and structure
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

/**
 * Function representing the react redux root.
 *
 * @param {object} props - The current component props
 * @param {Array|string} props.children - Required due to Provider
 * @param {object} props.store - Complete redux store state
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
 * @type {object}
 */
Root.propTypes = {
    children: PropTypes.node.isRequired,
    store: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.object
    ])).isRequired
};

export default Root;
