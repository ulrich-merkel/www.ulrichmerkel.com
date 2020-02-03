/* eslint-disable react/prefer-stateless-function, immutable/no-mutation, immutable/no-this */
/**
 * Rendering an input html tag.
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
 * @augments React.Component
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
     * @returns {ReactElement} React component markup
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
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...other}
            />
        );
    }

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
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
 * @type {object}
 */
ElementInput.defaultProps = {
    onBlur: Function.prototype,
    onChange: Function.prototype,
    placeholder: '',
    required: false,
    type: 'text'
};

export default ElementInput;
