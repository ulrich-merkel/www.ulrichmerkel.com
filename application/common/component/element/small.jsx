/**
 * Es6 module for React Component.
 * Component element React classes are small parts of the page,
 * like buttons and headlines. They often correspond to native
 * html elements and are wrapped for easier maintaning.
 *
 * @file
 * @module
 * @flow weak
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @requires react
 * @requires classnames
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import React, { PropTypes } from 'react';
import classnames from 'classnames';

/**
 * Function representing a component to return a single react child element.
 *
 * @constructor
 * @param {Object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
function ElementSmall(props) {

    const {
        htmlElement,
        className,
        ...otherProps
    } = props;

    const ComponentType = htmlElement;
    const composedClassName = classnames(
        'c-type--small',
        className
    );

    return (
        <ComponentType className={composedClassName} {...otherProps} />
    );

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {string} [htmlElement='nav'] - The component element type used for React.createElement
 * @property {string} [className] - The component css class names, will be merged into component default classNames
 */
ElementSmall.propTypes = {
    htmlElement: PropTypes.string,
    className: PropTypes.string
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see ElementSmall.propTypes
 */
ElementSmall.defaultProps = {
    htmlElement: 'small'
};

export default ElementSmall;
