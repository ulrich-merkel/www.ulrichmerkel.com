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
 * @requires classnames
 *
 * @changelog
 * - 0.0.2 moved to stateless function
 * - 0.0.1 basic functions and structure
 */
import React, { PropTypes } from 'react';
import classnames from 'classnames';

/**
 * Function representing a component to return a single react child element.
 *
 * @constructor
 * @param {Object} [props] The current component props
 * @returns {ReactElement} React component markup
 */
function GridCol(props) {

    const {
        htmlElement,
        cols,
        className,
        ...otherProps
    } = props;

    const ComponentType = htmlElement;
    const composedClassName = classnames(
        `l-grid__col--${cols}`,
        className
    );

    return (
        <ComponentType className={composedClassName} {...otherProps} />
    );

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {string} [htmlElement='div'] The component element type used for React.createElement
 * @property {string} [className] The addition css classNames
 * @property {number|string} [cols=12] The grid column cols
 */
GridCol.propTypes = {
    htmlElement: PropTypes.string,
    className: PropTypes.string,
    cols: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see GridCol.propTypes
 */
GridCol.defaultProps = {
    htmlElement: 'div',
    cols: 12

};

export default GridCol;
