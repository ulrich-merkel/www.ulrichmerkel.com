/* eslint-disable react/prefer-stateless-function */
/**
 * Rendering a input component with a wrapper to be used within a form.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, Component } from 'react';
import classnames from 'classnames';
import { noop } from 'lodash';

import { Input } from './input';
import { Label } from './label';
import { Icon } from './icon';

type Props = {
    id: string;
    name: string;
    className?: string;
    isLabelVisuallyHidden?: boolean;
    isPristine?: boolean;
    isValid?: boolean;
    itemProp?: string;
    label?: string;
    onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
    value?: string;
};

/**
 * Class representing a component.
 *
 * We can't use a stateless plain JavaScript function here,
 * because we want to use refs for this component.
 *
 * @augments React.Component
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
export class InputGroup extends Component<Props> {
    /**
     * The required render function to return a single react child element.
     *
     * @returns {ReactElement} React component markup
     */
    render() {
        const {
            id,
            isLabelVisuallyHidden = false,
            isPristine = false,
            isValid = true,
            itemProp,
            label = '',
            name,
            onBlur = noop,
            onChange = noop,
            placeholder,
            type = 'text',
            value = '',
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
