/* eslint-disable immutable/no-mutation */
/**
 * Es6 module as the root component for the react application.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
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
export function Root(props) {
    const { children, store } = props;

    return <Provider {...{ store }}>{children}</Provider>;
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
 */
Root.propTypes = {
    children: PropTypes.node.isRequired,
    store: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    ).isRequired
};
