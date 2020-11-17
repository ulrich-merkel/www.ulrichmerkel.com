/* eslint-disable immutable/no-mutation */
/**
 * Rendering a html tag to display font-icons.
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
 * @param {string} [props.className] - The component css class names - will be merged into component default classNames
 * @param {string} [props.htmlElement='i'] - The component element type used for React.createElement
 * @param {string} [props.icon=''] - The icon name taken for the web font
 * @returns {ReactElement|null} React component markup
 */
export function Icon(props) {
    const { htmlElement, className, icon, ...otherProps } = props;

    if (!icon) {
        return null;
    }

    const ComponentHtmlElement = htmlElement;
    const componentClassName = classnames(`c-font-icon--${icon}`, className);

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <ComponentHtmlElement
            className={componentClassName}
            aria-hidden="true"
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
Icon.propTypes = {
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    htmlElement: PropTypes.string,
    icon: PropTypes.string
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 */
Icon.defaultProps = {
    htmlElement: 'i',
    icon: ''
};
