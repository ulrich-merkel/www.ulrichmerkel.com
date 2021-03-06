/* eslint-disable react/prefer-stateless-function */
/**
 * Rendering an input html tag.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, Component, ReactNode } from 'react';
import classnames from 'classnames';
import { noop } from 'lodash';

import { getRequiredAttributes } from '../utils/required';
import { getTestIdAttributes } from '../utils/test-id';

type Props = {
    checked?: boolean;
    className?: string;
    id: string;
    itemProp?: string;
    name: string;
    onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
    testId?: string;
    type?: string;
    value?: string;
};

/**
 * Class representing a form input element.
 *
 * We can't use a stateless plain JavaScript function here,
 * because we want to use refs for this component.
 *
 * @augments React.Component
 * @property {string} props.id - The input id attribute
 * @property {string} props.name - The input name attribute
 * @property {string} [props.className] - The input css class names - will be merged into component default classNames
 * @property {string} [props.itemProp] - The itemProp attribute
 * @property {Function} [props.onBlur=Function.prototype] - The input onBlur handler
 * @property {Function} [props.onChange=Function.prototype] - The input onChange handler
 * @property {string} [props.placeholder=''] - The input placeholder attribute
 * @property {boolean} [props.required=false] - The input required attribute
 * @property {string} [props.testId] - Id for test queries
 * @property {string} [props.type='text'] - The input type attribute
 * @property {string} [props.value] - The input value attribute
 */
export class Input extends Component<Props> {
    /**
     * The required render function to return a single react child element.
     *
     * @returns {ReactElement} React component markup
     */
    render(): ReactNode {
        const {
            checked,
            className,
            id,
            itemProp,
            name,
            onBlur = noop,
            onChange = noop,
            placeholder = '',
            required = false,
            testId,
            type = 'text',
            value
        } = this.props;

        const composedClassName = classnames(
            'm-form__control--text',
            className
        );
        const requiredAttributes = getRequiredAttributes(required);
        const testIdAttributes = getTestIdAttributes(testId);

        return (
            <input
                className={composedClassName}
                {...{
                    checked,
                    id,
                    itemProp,
                    name,
                    onBlur,
                    onChange,
                    placeholder,
                    type,
                    value
                }}
                {...requiredAttributes}
                {...testIdAttributes}
            />
        );
    }
}
