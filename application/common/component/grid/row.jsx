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
 * @param {string} [props.htmlElement='div'] - The component element type used for React.createElement
 * @returns {ReactElement} React component markup
 */
function GridRow(props) {
    const {
        className,
        htmlElement,
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
 * @type {object}
 */
GridRow.propTypes = {
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    htmlElement: PropTypes.string
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 */
GridRow.defaultProps = {
    htmlElement: 'div'
};

export default GridRow;
