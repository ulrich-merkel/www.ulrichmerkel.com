/**
 * Es6 module for React Component.
 * Component grid React classes are small helpers for
 * easy maintaning the responsive css grid layout.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.2
 *
 * @requires react
 *
 * @changelog
 * - 0.0.2 moved to stateless function
 * - 0.0.1 basic functions and structure
 */
import React from 'react';

/**
 * Function representing a component to return a single react child element.
 *
 * @constructor
 * @param {Object} [props] The current component props
 * @returns {ReactElement} React component markup
 */
function GridSpaced(props) {

    return (
        <div className='l-grid__spaced--small' {...props} />
    );

}

export default GridSpaced;
