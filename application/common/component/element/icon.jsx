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
 * @returns {ReactElement|null} React component markup
 */
function ElementIcon(props) {

    const {
        htmlElement,
        className,
        icon,
        ...otherProps
    } = props;

    if (!icon) {
        return null;
    }

    const ComponentHtmlElement = htmlElement;
    const componentClassName = classnames(`c-font-icon--${icon}`, className);

    return (
        <ComponentHtmlElement className={componentClassName} aria-hidden='true' {...otherProps} />
    );

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {string} icon - The icon name taken for the web font
 * @property {string} [htmlElement='i'] - The component element type used for React.createElement
 * @property {string} [className] - The component css class names - will be merged into component default classNames
 */
ElementIcon.propTypes = {
    icon: PropTypes.string,
    htmlElement: PropTypes.string,
    className: PropTypes.string
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see ElementIcon.propTypes
 */
ElementIcon.defaultProps = {
    htmlElement: 'i'
};

export default ElementIcon;
