/* eslint-disable immutable/no-mutation */
/**
 * Es6 module for React Component.
 * Layout components merge modules to bigger parts of the
 * overall page layout.
 *
 * @file
 * @module
 * @flow weak
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.3
 *
 * @requires react
 * @requires prop-types
 *
 * @changelog
 * - 0.0.3 Moved to stateless function
 * - 0.0.2 Rewritten for es2015
 * - 0.0.1 Basic functions and structure
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] - The current component props
 * @param {Array|string} [props.children] - The component react children
 * @returns {ReactElement} React component markup
 */
function LayoutMain(props) {
    return (
        <main
            className='l-main'
            itemProp='mainContentOfPage'
            role='main'
        >
            {props.children}
        </main>
    );
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 */
LayoutMain.propTypes = {
    children: PropTypes.node // eslint-disable-line react/require-default-props
};

export default LayoutMain;
