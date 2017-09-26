/* eslint-disable react/prefer-stateless-function, immutable/no-mutation, immutable/no-this */
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
 * @requires prop-types
 * @requires classnames
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Class representing a component to return a single react child element.
 *
 * We can't use a stateless plain JavaScript function here,
 * because we want to use refs for this component.
 *
 * @class
 * @extends React.Component
 * @property {string} props.id - The input id attribute
 * @property {string} props.name - The input name attribute
 * @property {string} [props.className] - The input css class names - will be merged into component default classNames
 * @property {string} [props.itemProp] - The itemProp attribute
 * @property {Function} [props.onBlur=Function.prototype] - The input onBlur handler
 * @property {Function} [props.onChange=Function.prototype] - The input onChange handler
 * @property {string} [props.placeholder=''] - The input placeholder attribute
 * @property {boolean} [props.required=false] - The input required attribute
 * @property {string} [props.type='text'] - The input type attribute
 * @property {string} [props.value] - The input value attribute
 */
class ElementInput extends Component {

    /**
     * The required render function to return a single react child element.
     *
     * @function
     * @returns {React.Element} React component markup
     */
    render() {
        const {
            className,
            id,
            itemProp,
            name,
            onBlur,
            onChange,
            placeholder,
            required,
            type,
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
                    itemProp,
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
 */
ElementInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    itemProp: PropTypes.string, // eslint-disable-line react/require-default-props
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    type: PropTypes.string,
    value: PropTypes.string // eslint-disable-line react/require-default-props
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 */
ElementInput.defaultProps = {
    onBlur: Function.prototype,
    onChange: Function.prototype,
    placeholder: '',
    required: false,
    type: 'text'
};

export default ElementInput;
