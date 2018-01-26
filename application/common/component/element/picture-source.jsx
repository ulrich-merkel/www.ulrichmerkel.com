/* eslint-disable immutable/no-mutation */
/**
 * Rendering a source html tag for the use in a picture element.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.2
 *
 * @see {@link https://css-tricks.com/using-webp-images/}
 *
 * @requires react
 * @requires prop-types
 * @requires classnames
 *
 * @changelog
 * - 0.0.2 Adding WeP support
 * - 0.0.1 Basic functions and structure
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Small helper to get correct type attribute.
 *
 * @private
 * @param {string} ext - The file extension
 * @returns {string} The source element's type description
 */
function getType(ext) {
    switch(ext) {
    case 'jpg':
        return 'image/jpeg';
    default:
        return `image/${ext}`;
    }
}

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} props - The current component props
 * @param {string} props.ext - The image extension (jpg, png)
 * @param {string} props.name - The image name
 * @param {string} props.path - The image path (folder)
 * @param {string|number} props.width - The image width (for dynamically creating names)
 * @param {string|number} props.height - The image height (for dynamically creating names)
 * @param {string|number} props.minWidth - The mediaquery min-width value
 * @param {string} [props.className] - The component css class names, will be merged into component default classNames
 * @returns {ReactElement} React component markup
 */
function ElementPictureSource(props) {
    const {
        className,
        ext,
        height,
        minWidth,
        name,
        path,
        width
    } = props;

    const composedClassName = classnames(
        'c-picture__source',
        className
    );

    const srcSet = `${path}${name}@${width}x${height}`;
    const media = `(min-width: ${minWidth}px)`;

    return [
        <source
            className={composedClassName}
            key={`${srcSet}.webp`}
            media={media}
            srcSet={`${srcSet}.webp`}
            type={getType('webp')}
        />,
        <source
            className={composedClassName}
            key={`${srcSet}.${ext}`}
            media={media}
            srcSet={`${srcSet}.${ext}`}
            type={getType(ext)}
        />
    ];
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 */
ElementPictureSource.propTypes = {
    ext: PropTypes.oneOf([
        'jpg',
        'png',
        ''
    ]).isRequired,
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
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
