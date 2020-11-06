/* eslint-disable immutable/no-mutation */
/**
 * Rendering a nav html tag.
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
 * @param {object} [props] - The current component props
 * @param {string} [props.className] - The component css class names, will be merged into component default classNames
 * @param {string} [props.htmlElement='nav'] - The component element type used for React.createElement
 * @returns {ReactElement} React component markup
 */
export function Nav(props) {
    const { htmlElement, className, ...otherProps } = props;

    const ComponentType = htmlElement;
    const composedClassName = classnames('m-nav', className);

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <ComponentType
            className={composedClassName}
            role="navigation"
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
Nav.propTypes = {
    htmlElement: PropTypes.string,
    className: PropTypes.string // eslint-disable-line react/require-default-props
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 */
Nav.defaultProps = {
    htmlElement: 'nav'
};
