/* eslint-disable react/prefer-stateless-function */
/**
 * Es6 module for React Component.
 * Component element React classes are small parts of the page,
 * like buttons and headlines. They often correspond to native
 * html elements and are wrapped for easier maintaning.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @requires react
 * @requires classnames
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

/**
 * Class representing a component to return a single react child element.
 *
 * We can't use a stateless plain JavaScript function here,
 * because we want to use refs for this component.
 *
 * @class
 * @extends React.Component
 */
class ElementForm extends Component {

    /**
     * The required render function to return a single react child element.
     *
     * @function
     * @returns {ReactElement} React component markup
     */
    render() {

        const {
            acceptCharset,
            action,
            className,
            id,
            itemProp,
            itemType,
            method,
            role,
            onSubmit,
            onReset,
            ...otherProps
        } = this.props;

        const composedClassName = classnames(
            'm-form',
            className
        );

        return (
            <form
                className={composedClassName}
                noValidate
                itemScope
                {...{
                    acceptCharset,
                    action,
                    id,
                    itemProp,
                    itemType,
                    method,
                    role,
                    onSubmit,
                    onReset
                }}
                {...otherProps}
            />
        );
    }

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {string} action - The form action attribute
 * @property {string} id - The form id attribute
 * @property {string} [acceptCharset='utf-8'] - The form action attribute
 * @property {string} [className] - The form css class names, will be merged into component default classNames
 * @property {string} [itemProp='potentialAction'] - The form itemProp attribute
 * @property {string} [itemType='http://schema.org/CommunicateAction'] - The form itemType attribute
 * @property {string} [method='post'] - The form method attribute
 * @property {string} [role='form'] - The form role attribute
 * @property {Function} [onSubmit=Function.prototype] - The form submit handler function
 * @property {Function} [onReset=Function.prototype] - The form reset handler function
 */
ElementForm.propTypes = {
    action: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    acceptCharset: PropTypes.string,
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    itemProp: PropTypes.string,
    itemType: PropTypes.string,
    method: PropTypes.string,
    role: PropTypes.string,
    onSubmit: PropTypes.func,
    onReset: PropTypes.func
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see ElementForm.propTypes
 */
ElementForm.defaultProps = {
    acceptCharset: 'utf-8',
    itemProp: 'potentialAction',
    itemType: 'http://schema.org/CommunicateAction',
    method: 'post',
    role: 'form',
    onSubmit: Function.prototype,
    onReset: Function.prototype
};

export default ElementForm;
