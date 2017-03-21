/* eslint-disable immutable/no-mutation */
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
 * @version 0.0.2
 *
 * @requires react
 * @requires classnames
 *
 * @changelog
 * - 0.0.2 Add isVisuallyHidden to props
 * - 0.0.1 Basic functions and structure
 */
import React, { PropTypes } from 'react';
import classnames from 'classnames';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] - The current component props
 * @returns {React.Element} React component markup
 */
function ElementLegend(props) {
    const {
        className,
        isVisuallyHidden,
        ...other
    } = props;

    const composedClassName = classnames(
        'm-form__legend',
        className,
        {
            'is-visually-hidden': isVisuallyHidden
        }
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
 * @property {boolean} [isVisuallyHidden] - Whether the legend is visually hidden or not
 */
ElementLegend.propTypes = {
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    isVisuallyHidden: PropTypes.bool
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see ElementLegend.propTypes
 */
ElementLegend.defaultProps = {
    isVisuallyHidden: false
};

export default ElementLegend;
