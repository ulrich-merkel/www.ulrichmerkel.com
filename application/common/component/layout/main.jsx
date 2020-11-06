/* eslint-disable immutable/no-mutation */
/**
 * Es6 module for React Component.
 * Layout components merge modules to bigger parts of the
 * overall page layout.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import * as React from 'react';
import PropTypes from 'prop-types';

/**
 * Function representing a component to return a single react child element.
 *
 * @param {object} [props] - The current component props
 * @param {Array|string} [props.children] - The component react children
 * @returns {ReactElement} React component markup
 */
export function LayoutMain(props) {
    const { children } = props;

    return (
        <main className="l-main" itemProp="mainContentOfPage" role="main">
            {children}
        </main>
    );
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
 */
LayoutMain.propTypes = {
    children: PropTypes.node // eslint-disable-line react/require-default-props
};
