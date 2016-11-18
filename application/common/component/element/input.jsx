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
 * - 0.0.1 basic functions and structure
 */
import React, { PropTypes } from 'react';
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
class ElementInput extends React.Component {

    /**
     * The required render function to return a single react child element.
     *
     * @function
     * @returns {ReactElement} React component markup
     */
    render() {

        const {
            className,
            required,
            type,
            name,
            id,
            placeholder,
            onBlur,
            onChange,
            value,
            ...other
        } = this.props;

        const composedClassName = classnames(
            'm-form__control--text',
            className
        );

        const requiredAttr = required ? {
            required: true,
            'aria-required': true
        } : null;

        return (
            <input
                className={composedClassName}
                {...{
                    type,
                    id,
                    name,
                    value,
                    onBlur,
                    onChange,
                    placeholder
                }}
                {...requiredAttr}
                {...other}
            />
        );
    }

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {string} [className] The input css class names - will be merged into component default classNames
 * @property {boolean} [required=false] The input required attribute
 * @property {string} [type='text'] The input type attribute
 * @property {string} [placeholder=''] The input placeholder attribute
 * @property {string} [name] The input name attribute
 * @property {string} [id] The input id attribute
 * @property {string} [value] The input value attribute
 * @property {Function} [onBlur=Function.prototype] The input onBlur handler
 * @property {Function} [onChange=Function.prototype] The input onChange handler
 */
ElementInput.propTypes = {
    className: PropTypes.string,
    required: PropTypes.bool,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see ElementInput.propTypes
 */
ElementInput.defaultProps = {
    required: false,
    type: 'text',
    placeholder: '',
    onBlur: Function.prototype,
    onChange: Function.prototype
};

export default ElementInput;