/* eslint-disable immutable/no-mutation */
/**
 * Rendering a legend html tag.
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
 * @param {string} [props.className] - The legend css class names, will be merged into component default classNames
 * @param {boolean} [props.isVisuallyHidden] - Whether the legend is visually hidden or not
 * @returns {ReactElement} React component markup
 */
export function Legend(props) {
    const { className, isVisuallyHidden, ...other } = props;

    const composedClassName = classnames('m-form__legend', className, {
        'is-visually-hidden': isVisuallyHidden
    });

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <legend className={composedClassName} {...other} />
    );
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
 */
Legend.propTypes = {
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    isVisuallyHidden: PropTypes.bool
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 */
Legend.defaultProps = {
    isVisuallyHidden: false
};
