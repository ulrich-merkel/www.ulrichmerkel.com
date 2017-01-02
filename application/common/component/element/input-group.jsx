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
 * @requires common/component/element/input
 * @requires common/component/element/label
 * @requires common/component/element/icon
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import React, { PropTypes, Component } from 'react';
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
 */
class ElementInputGroup extends Component {

    /**
     * The required render function to return a single react child element.
     *
     * @function
     * @returns {ReactElement} React component markup
     */
    render() {

        const {
            id,
            name,
            onChange,
            onBlur,
            label,
            type,
            value,
            isValid,
            isPristine,
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
                        name,
                        type,
                        onBlur,
                        onChange,
                        value
                    }}
                />
                <Label htmlFor={id}>
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
 * @property {string} id - The input id attribute
 * @property {string} name - The input name attribute
 * @property {string} [className] - The component css class names - will be merged into component default classNames
 * @property {string} [type='text'] - The input type attribute
 * @property {string} [label] - The input label attribute
 * @property {Function} [onBlur] - The input blur handler
 * @property {Function} [onChange] - The input change handler
 * @property {string} [value] - The default input value
 * @property {boolean} [isValid=true] - Whether the input has a valid value or not
 * @property {boolean} [isPristine] - Whether the input has a user given value or not
 */
ElementInputGroup.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.string,
    isValid: PropTypes.bool,
    isPristine: PropTypes.bool
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see ElementButtonGroup.propTypes
 */
ElementInputGroup.defaultProps = {
    type: 'text',
    isValid: true
};

export default ElementInputGroup;
