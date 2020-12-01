/* eslint-disable react/prefer-stateless-function */
/**
 * Rendering a textarea component with a wrapper to be used within a form.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, Component, ReactNode } from 'react';
import classnames from 'classnames';

import { Textarea } from './textarea';
import { Label } from './label';
import { Icon } from './icon';
import { View } from './view';

type Props = {
    className?: string;
    id: string;
    isPristine?: boolean;
    isValid?: boolean;
    label?: string;
    name: string;
    onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    testId?: string;
    value?: string;
};

/**
 * Class representing a textarea group component.
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
export class TextareaGroup extends Component<Props> {
    /**
     * The required render function to return a single react child element.
     *
     * @returns {ReactElement} React component markup
     */
    render(): ReactNode {
        const {
            id,
            isPristine = false,
            isValid = true,
            label,
            name,
            onBlur,
            onChange,
            required,
            testId,
            value = ''
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
            <View className={composedGroupClassName}>
                <Textarea
                    className={composedInputClassName}
                    {...{
                        id,
                        name,
                        onBlur,
                        onChange,
                        required,
                        testId,
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
            </View>
        );
    }
}
