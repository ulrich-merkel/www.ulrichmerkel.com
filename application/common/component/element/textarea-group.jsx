/* eslint-disable react/prefer-stateless-function, immutable/no-mutation, immutable/no-this */
/**
 * Rendering a textarea component with a wrapper to be used within a form.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Textarea } from './textarea';
import { Label } from './label';
import { Icon } from './icon';

/**
 * Class representing a component.
 *
 * We can't use a stateless plain JavaScript function here,
 * because we want to use refs for this component.
 *
 * @augments React.Component
 * @property {string} props.id - The input id attribute
 * @property {string}props.name - The input name attribute
 * @property {string} [props.className] - The component css class names - will be merged into component default classNames
 * @property {boolean} [props.isPristine=false] - Whether the input has a user given value or not
 * @property {boolean} [props.isValid=true] - Whether the input has a valid value or not
 * @property {string} [props.label] - The input label attribute
 * @property {Function} [props.onBlur=Function.prototype] - The input blur handler
 * @property {Function} [props.onChange=Function.prototype] - The input change handler
 * @property {string} [props.value=''] - The default input value
 */
export class TextareaGroup extends Component {
    /**
     * The required render function to return a single react child element.
     *
     * @returns {ReactElement} React component markup
     */
    render() {
        const {
            id,
            isPristine,
            isValid,
            label,
            name,
            onBlur,
            onChange,
            value,
            ...otherProps
        } = this.props;

        const composedGroupClassName = classnames(
            {
                'has-error': !isValid && isPristine,
                'is-valid': isValid && isPristine
            },
            'm-form__group'
        );

        const composedInputClassName = classnames({
            'is-pristine': isPristine
        });

        return (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <div className={composedGroupClassName} {...otherProps}>
                <Textarea
                    required
                    className={composedInputClassName}
                    {...{
                        id,
                        name,
                        onBlur,
                        onChange,
                        value
                    }}
                />
                <Label htmlFor={id}>
                    {label}
                    <Icon className="m-form__label__icon--error" icon="sad" />
                    <Icon
                        className="m-form__label__icon--success"
                        icon="smile"
                    />
                </Label>
            </div>
        );
    }
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
 */
TextareaGroup.propTypes = {
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    id: PropTypes.string.isRequired,
    isPristine: PropTypes.bool,
    isValid: PropTypes.bool,
    label: PropTypes.string, // eslint-disable-line react/require-default-props
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.string
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 * @see TextareaGroup.propTypes
 */
TextareaGroup.defaultProps = {
    isPristine: false,
    isValid: true,
    onBlur: Function.prototype,
    onChange: Function.prototype,
    value: ''
};
