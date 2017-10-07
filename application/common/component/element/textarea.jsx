/* eslint-disable react/prefer-stateless-function, immutable/no-mutation, immutable/no-this */
/**
 * Rendering a textarea html tag.
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
 * Class representing a component.
 *
 * We can't use a stateless plain JavaScript function here,
 * because we want to use refs for this component.
 *
 * @class
 * @extends React.Component
 * @property {string} props.id - The input id attribute
 * @property {string} props.name - The input name attribute
 * @property {string} [props.className] - The textarea css class names - will be merged into component default classNames
 * @property {boolean} [props.required=false] - The textarea required attribute
 * @property {string} [props.placeholder=''] - The textarea placeholder attribute
 * @property {string} [props.cols='50'] - The textarea cols attribute
 * @property {string} [props.rows='4'] - The textarea rows attribute
 * @property {string} [props.value] - The textarea value attribute
 * @property {Function} [props.onBlur=Function.prototype] - The textarea onBlur handler
 * @property {Function} [props.onChange=Function.prototype] - The textarea onChange handler
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
 */
ElementTextarea.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    cols: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    rows: PropTypes.string,
    value: PropTypes.string // eslint-disable-line react/require-default-props
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see ElementTextarea.propTypes
 */
ElementTextarea.defaultProps = {
    cols: '50',
    onBlur: Function.prototype,
    onChange: Function.prototype,
    placeholder: '',
    required: false,
    rows: '4'
};

export default ElementTextarea;
