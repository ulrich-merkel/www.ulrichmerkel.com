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
 * @requires component/grid/container
 *
 * @changelog
 * - 0.0.2 moved to stateless function
 * - 0.0.1 basic functions and structure
 */
import React from 'react';
import GridContainer from './container';

/**
 * Function representing a component to return a single react child element.
 *
 * @constructor
 * @param {Object} [props] The current component props
 * @returns {ReactElement} React component markup
 */
function GridSection(props) {

    return (
        <GridContainer className={'m-section'} {...props} />
    );

}

export default GridSection;