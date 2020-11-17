/* eslint-disable immutable/no-mutation */
/**
 * Rendering a label html tag.
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
 * @param {string} [props.htmlFor] - The label for attribute
 * @param {string} [props.className] - The label css class names, will be merged into component default classNames
 * @param {boolean} [props.isVisuallyHidden] - Whether the label is visually hidden or not
 * @returns {ReactElement} React component markup
 */
export function Label(props) {
    const { className, htmlFor, isVisuallyHidden, ...otherProps } = props;

    const composedClassName = classnames('m-form__label', className, {
        'is-visually-hidden': isVisuallyHidden
    });

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading, jsx-a11y/label-has-for,  jsx-a11y/label-has-associated-control
        <label
            className={composedClassName}
            htmlFor={htmlFor}
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
Label.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    isVisuallyHidden: PropTypes.bool
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 */
Label.defaultProps = {
    isVisuallyHidden: false
};
