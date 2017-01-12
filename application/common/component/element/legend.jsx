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
 * @function
 * @param {Object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
function ElementLegend(props) {

    const {
        className,
        ...other
    } = props;

    const composedClassName = classnames(
        'm-form__legend',
        className
    );

    return (
        <legend className={composedClassName} {...other} />
    );

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {string} [className] - The legend css class names, will be merged into component default classNames
 */
ElementLegend.propTypes = {
    className: PropTypes.string // eslint-disable-line react/require-default-props
};

export default ElementLegend;
