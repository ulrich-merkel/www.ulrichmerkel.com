/* eslint-disable immutable/no-mutation */
/**
 * Rendering a single html img tag.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Function representing a component to return a single react child element.
 *
 * @param {object} props - The current component props
 * @param {string} props.src - The current image location
 * @param {string} [props.alt=''] - The image alt attribute
 * @param {string} [props.className] - The component css class names, will be merged into component default classNames
 * @returns {ReactElement} React component markup
 */
export function Image(props) {
    const { className, alt, src, ...otherProps } = props;

    const componentClassName = classnames('c-img', className);

    return (
        <img
            alt={alt}
            className={componentClassName}
            src={src}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        />
    );
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
 */
Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    className: PropTypes.string // eslint-disable-line react/require-default-props
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 */
Image.defaultProps = {
    alt: ''
};
