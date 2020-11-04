/* eslint-disable immutable/no-mutation */
/**
 * Rendering a header html tag.
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
import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Function representing a component to return a single react child element.
 *
 * @param {object} [props] - The current component props
 * @param {string} [props.className] - The component css class names, will be merged into component default classNames
 * @param {string} [props.htmlElement='header'] - The component element type used for React.createElement
 * @returns {ReactElement} React component markup
 */
function ElementHeader(props) {
    const {
        htmlElement,
        className,
        ...otherProps
    } = props;

    const ComponentType = htmlElement;
    const composedClassName = classnames(
        'c-header',
        className
    );

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <ComponentType className={composedClassName} role='banner' {...otherProps} />
    );
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
 */
ElementHeader.propTypes = {
    htmlElement: PropTypes.string,
    className: PropTypes.string // eslint-disable-line react/require-default-props
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 */
ElementHeader.defaultProps = {
    htmlElement: 'header'
};

export default ElementHeader;
