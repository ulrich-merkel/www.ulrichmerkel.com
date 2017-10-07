/* eslint-disable immutable/no-mutation */
/**
 * Rendering a single html img tag.
 *
 * @file
 * @module
 * @flow weak
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @requires react
 * @requires prop-types
 * @requires classnames
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} props - The current component props
 * @param {string} props.src - The current image location
 * @param {string} [props.alt=''] - The image alt attribute
 * @param {string} [props.className] - The component css class names, will be merged into component default classNames
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
 */
ElementImage.defaultProps = {
    alt: ''
};

export default ElementImage;
