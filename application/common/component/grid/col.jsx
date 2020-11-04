/* eslint-disable immutable/no-mutation */
/**
 * Es6 module for React Component.
 * Component grid React classes are small helpers for
 * easy maintaning the responsive css grid layout.
 *
 * @file
 * @module
 * @flow weak
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.2
 *
 * @requires react
 * @requires prop-types
 * @requires classnames
 *
 * @changelog
 * - 0.0.2 Moved to stateless function
 * - 0.0.1 Basic functions and structure
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Function representing a component to return a single react child element.
 *
 * @param {object} [props] - The current component props
 * @param {string} [props.className] - The addition css classNames
 * @param {number|string} [props.cols=12] - The grid column cols
 * @param {string} [props.htmlElement='div'] - The component element type used for React.createElement
 * @returns {ReactElement} React component markup
 */
function GridCol(props) {
    const { className, cols, htmlElement, ...otherProps } = props;

    const ComponentType = htmlElement;
    const composedClassName = classnames(`l-grid__col--${cols}`, className);

    return <ComponentType className={composedClassName} {...otherProps} />;
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
 */
GridCol.propTypes = {
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    cols: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    htmlElement: PropTypes.string
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 */
GridCol.defaultProps = {
    cols: 12,
    htmlElement: 'div'
};

export default GridCol;
