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
 * @version 0.0.2
 *
 * @requires react
 * @requires prop-types
 * @requires classnames
 * @requires common/component/element/input
 * @requires common/component/element/label
 * @requires common/component/element/icon
 *
 * @changelog
 * - 0.0.2 Add isLabelVisuallyHidden and placeholder to props
 * - 0.0.1 Basic functions and structure
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Input from './input';
import Label from './label';
import Icon from './icon';

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
 * @property {string} [props.className] - The component css class names - will be merged into component default classNames
 * @property {boolean} [props.isLabelVisuallyHidden] - Whether the label legend is visually hidden or not
 * @property {boolean} [props.isPristine=false] - Whether the input has a user given value or not
 * @property {boolean} [props.isValid=true] - Whether the input has a valid value or not
 * @property {string} [props.itemProp] - The itemProp input attribute
 * @property {string} [props.label=''] - The current label string
 * @property {Function} [props.onBlur=Function.prototype] - The input blur handler
 * @property {Function} [props.onChange=Function.prototype] - The input change handler
 * @property {string} [props.type='text'] - The input type attribute
 * @property {string} [props.value=''] - The default input value
 */
class ElementInputGroup extends Component {

    /**
     * The required render function to return a single react child element.
     *
     * @function
     * @returns {React.Element} React component markup
     */
    render() {
        const {
            id,
            isLabelVisuallyHidden,
            isPristine,
            isValid,
            itemProp,
            label,
            name,
            onBlur,
            onChange,
            placeholder,
            type,
            value,
            ...otherProps
        } = this.props;

        const composedGroupClassName = classnames({
            'has-error': !isValid && isPristine,
            'is-valid': isValid && isPristine
        }, 'm-form__group');

        const composedInputClassName = classnames({
            'is-pristine': isPristine
        });

        return (
            <div className={composedGroupClassName} {...otherProps}>
                <Input
                    required
                    className={composedInputClassName}
                    {...{
                        id,
                        itemProp,
                        name,
                        type,
                        onBlur,
                        onChange,
                        value,
                        placeholder
                    }}
                />
                <Label htmlFor={id} isVisuallyHidden={isLabelVisuallyHidden}>
                    {label}
                    <Icon className='m-form__label__icon--error' icon='sad' />
                    <Icon className='m-form__label__icon--success' icon='smile' />
                </Label>
            </div>
        );
    }

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 */
ElementInputGroup.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    isLabelVisuallyHidden: PropTypes.bool,
    isPristine: PropTypes.bool,
    isValid: PropTypes.bool,
    itemProp: PropTypes.string,  // eslint-disable-line react/require-default-props
    label: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    placeholder: PropTypes.string, // eslint-disable-line react/require-default-props
    type: PropTypes.string,
    value: PropTypes.string
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 */
ElementInputGroup.defaultProps = {
    isLabelVisuallyHidden: false,
    isPristine: false,
    isValid: true,
    label: '',
    onBlur: Function.prototype,
    onChange: Function.prototype,
    type: 'text',
    value: ''
};

export default ElementInputGroup;
