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
 * @requires classnames
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

/**
 * Class representing a component.
 *
 * We can't use a stateless plain JavaScript function here,
 * because we want to use refs for this component.
 *
 * @class
 * @extends React.Component
 */
class ElementTextarea extends Component {

    /**
     * The required render function to return a single react child element.
     *
     * @function
     * @returns {React.Element} React component markup
     */
    render() {

        const {
            className,
            required,
            ...other
        } = this.props;

        const composedClassName = classnames(
            'm-form__control--textarea',
            className
        );

        const requiredAttributes = required ? {
            required: true,
            'aria-required': true
        } : null;

        return (
            <textarea className={composedClassName} {...requiredAttributes} {...other} />
        );
    }

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {string} id - The input id attribute
 * @property {string} name - The input name attribute
 * @property {string} [className] - The textarea css class names - will be merged into component default classNames
 * @property {boolean} [required=false] - The textarea required attribute
 * @property {string} [placeholder=''] - The textarea placeholder attribute
 * @property {string} [cols='50'] - The textarea cols attribute
 * @property {string} [rows='4'] - The textarea rows attribute
 * @property {string} [value] - The textarea value attribute
 * @property {Function} [onBlur=Function.prototype] - The textarea onBlur handler
 * @property {Function} [onChange=Function.prototype] - The textarea onChange handler
 */
ElementTextarea.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    cols: PropTypes.string,
    rows: PropTypes.string,
    value: PropTypes.string, // eslint-disable-line react/require-default-props
    onBlur: PropTypes.func,
    onChange: PropTypes.func
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see ElementTextarea.propTypes
 */
ElementTextarea.defaultProps = {
    required: false,
    placeholder: '',
    cols: '50',
    rows: '4',
    onBlur: Function.prototype,
    onChange: Function.prototype
};

export default ElementTextarea;
