/**
 * Es6 module for React Component.
 * Component element React classes are small parts of the page,
 * like buttons and headlines. They often correspond to native
 * html elements and are wrapped for easier maintaning.
 *
 * @file
 * @module
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
function ElementPictureSource(props) {

    const {
        className,
        path,
        name,
        ext,
        width,
        height,
        minWidth
    } = props;

    const composedClassName = classnames(
        'c-picture__source',
        className
    );

    const srcSet = `${path}${name}@${width}x${height}.${ext}`;
    const media = `(min-width: ${minWidth}px)`;

    return (
        <source className={composedClassName} {...{ srcSet, media }} />
    );
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {string} path - The image path (folder)
 * @property {string} name - The image name
 * @property {string} ext - The image extension (jpg, png)
 * @property {string|number} width - The image width (for dynamically creating names)
 * @property {string|number} height - The image height (for dynamically creating names)
 * @property {string|number} minWidth - The mediaquery min-width value
 * @property {string} [className] - The component css class names, will be merged into component default classNames
 */
ElementPictureSource.propTypes = {
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ext: PropTypes.oneOf([
        'jpg',
        'png',
        ''
    ]).isRequired,
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    minWidth: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    className: PropTypes.string // eslint-disable-line react/require-default-props
};

export default ElementPictureSource;
