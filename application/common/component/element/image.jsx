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
 * @returns {React.Element} React component markup
 */
function ElementImage(props) {

    const {
        className,
        alt,
        src,
        ...otherProps
    } = props;

    const componentClassName = classnames(
        'c-img',
        className
    );

    return (
        <img
            alt={alt}
            className={componentClassName}
            src={src}
            {...otherProps}
        />
    );

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {string} src - The current image location
 * @property {string} [alt=''] - The image alt attribute
 * @property {string} [className] - The component css class names, will be merged into component default classNames
 */
ElementImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    className: PropTypes.string // eslint-disable-line react/require-default-props
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see ElementImage.propTypes
 */
ElementImage.defaultProps = {
    alt: ''
};

export default ElementImage;
