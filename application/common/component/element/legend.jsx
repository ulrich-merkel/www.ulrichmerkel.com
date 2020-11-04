/* eslint-disable immutable/no-mutation */
/**
 * Rendering a legend html tag.
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
 * - 0.0.2 Add isVisuallyHidden to props
 * - 0.0.1 Basic functions and structure
 */
import React from 'react';
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
function ElementLegend(props) {
    const {
        className,
        isVisuallyHidden,
        ...other
    } = props;

    const composedClassName = classnames(
        'm-form__legend',
        className,
        {
            'is-visually-hidden': isVisuallyHidden
        }
    );

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
ElementLegend.propTypes = {
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    isVisuallyHidden: PropTypes.bool
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 */
ElementLegend.defaultProps = {
    isVisuallyHidden: false
};

export default ElementLegend;
