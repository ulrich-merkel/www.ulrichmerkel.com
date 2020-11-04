/* eslint-disable immutable/no-mutation */
/**
 * Rendering a small html tag.
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
 * @param {object} [props] - The current component props
 * @param {string} [props.className=''] - The component css class names, will be merged into component default classNames
 * @param {string} [props.htmlElement='nav'] - The component element type used for React.createElement
 * @returns {ReactElement} React component markup
 */
function ElementSmall(props) {
    const {
        htmlElement: ComponentType,
        className,
        ...otherProps
    } = props;

    const composedClassName = classnames(
        'c-type--small',
        className
    );

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <ComponentType className={composedClassName} {...otherProps} />
    );
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
 */
ElementSmall.propTypes = {
    className: PropTypes.string,
    htmlElement: PropTypes.string
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 */
ElementSmall.defaultProps = {
    className: '',
    htmlElement: 'small'
};

export default ElementSmall;
