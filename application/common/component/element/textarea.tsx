/* eslint-disable react/prefer-stateless-function */
/**
 * Rendering a textarea html tag.
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
    className?: string;
    cols?: number;
    id: string;
    name: string;
    onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
    rows?: number;
    testId?: string;
    value?: string;
};

/**
 * Class representing a html input element.
 *
 * We can't use a stateless plain JavaScript function here,
 * because we want to use refs for this component.
 *
 * @augments React.Component
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
export class Textarea extends Component<Props> {
    /**
     * The required render function to return a single react child element.
     *
     * @returns {ReactElement} React component markup
     */
    render(): ReactNode {
        const {
            className,
            cols = 50,
            id,
            name,
            onBlur = noop,
            onChange = noop,
            placeholder = '',
            required = false,
            rows = 4,
            testId,
            value
        } = this.props;

        const composedClassName = classnames(
            'm-form__control--textarea',
            className
        );
        const requiredAttributes = getRequiredAttributes(required);
        const testIdAttributes = getTestIdAttributes(testId);

        return (
            <textarea
                className={composedClassName}
                {...{
                    cols,
                    id,
                    name,
                    onBlur,
                    onChange,
                    placeholder,
                    rows,
                    value
                }}
                {...requiredAttributes}
                {...testIdAttributes}
            />
        );
    }
}
