/**
 * Es6 module for React Component.
 * Component module React classes combine elements to
 * bigger parts of the page.
 *
 * @file
 * @module
 * @flow weak
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.3
 *
 * @requires react
 * @requires classnames
 *
 * @changelog
 * - 0.0.3 moved to stateless function
 * - 0.0.2 rewritten for es2015
 * - 0.0.1 basic functions and structure
 *
 */
import React, { PropTypes } from 'react';
import classnames from 'classnames';

import Button from './../../element/button';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] - The current component props
 * @returns {React.Element} React component markup
 */
function ModuleKeyVisualButton(props) {

    const {
        onClick,
        label,
        title
    } = props;

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
 * @type {Object}
 * @property {string} [headline] - The button title content
 * @property {string} [lead] - The button label content
 * @property {Function} [onClickBtn] - The button onclick handler
 */
ModuleKeyVisualButton.propTypes = {
    title: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func
};

export default ModuleKeyVisualButton;
