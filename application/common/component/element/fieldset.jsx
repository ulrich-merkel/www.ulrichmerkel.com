/* eslint-disable immutable/no-mutation */
/**
 * Rendering a fieldset html element.
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
 * @param {Object} [props] - The current component props
 * @param {string} [props.className] - The component css class names - will be merged into component default classNames
 * @returns {ReactElement} React component markup
 */
function ElementFieldset(props) {
    const {
        className,
        ...otherProps
    } = props;

    const componentClassName = classnames(
        'm-form__fieldset',
        className
    );

    return (
        <fieldset className={componentClassName} {...otherProps} />
    );
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 */
ElementFieldset.propTypes = {
    className: PropTypes.string // eslint-disable-line react/require-default-props
};


export default ElementFieldset;
