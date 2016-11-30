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
function GridRow(props) {

    const {
        htmlElement,
        className,
        ...otherProps
    } = props;

    const ComponentType = htmlElement;
    const componentClassName = classnames('l-grid__row', className);

    return (
        <ComponentType className={componentClassName} {...otherProps} />
    );

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {string} [htmlElement='div'] The component element type used for React.createElement
 * @property {string} [className] The addition css classNames
 */
GridRow.propTypes = {
    htmlElement: PropTypes.string,
    className: PropTypes.string
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see GridRow.propTypes
 */
GridRow.defaultProps = {
    htmlElement: 'div'
};

export default GridRow;
