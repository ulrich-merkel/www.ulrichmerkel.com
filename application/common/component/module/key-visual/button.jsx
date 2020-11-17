/* eslint-disable immutable/no-mutation */
/**
 * Es6 module for React Component.
 * Component module React classes combine elements to
 * bigger parts of the page.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Button } from '../../element/button';

/**
 * Function representing a component to return a single react child element.
 *
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export function ModuleKeyVisualButton(props) {
    const { onClick, label, title } = props;

    if (!label || !title) {
        return null;
    }

    const componentButtonClassName = classnames(
        'm-key-visual__button--down',
        'c-font-icon--chevron-down'
    );

    return (
        <Button
            className={componentButtonClassName}
            onClick={onClick}
            title={title}
            isLabelHidden
        >
            {label}
        </Button>
    );
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
 * @property {string} [headline=''] - The button title content
 * @property {string} [lead=''] - The button label content
 * @property {Function} [onClick=Function.prototype] - The button onclick handler
 */
ModuleKeyVisualButton.propTypes = {
    title: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 * @see ModuleKeyVisualButton.propTypes
 */
ModuleKeyVisualButton.defaultProps = {
    title: '',
    label: '',
    onClick: Function.prototype
};
