/**
 * Rendering a checkbox toggle.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, FunctionComponent } from 'react';
import classnames from 'classnames';
import { noop } from 'lodash';

import { Input } from './input';
import { Label } from './label';
import { View } from './view';

type Props = {
    checked?: boolean;
    className?: string;
    htmlElement?: keyof JSX.IntrinsicElements;
    id?: string;
    label?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    testId?: string;
};

/**
 * Function representing a toggle checkbox with label.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const Toggle: FunctionComponent<Props> = (props) => {
    const {
        checked = false,
        className,
        htmlElement,
        id = 'toggle',
        label = '',
        onChange = noop,
        testId
    } = props;

    const composedClassName = classnames('c-toggle', className);

    return (
        <View className={composedClassName} {...{ htmlElement }}>
            <Input
                className="c-toggle__input"
                id={id}
                name={id}
                type="checkbox"
                {...{ checked, onChange, testId }}
            />
            <Label className="c-toggle__label" htmlFor={id}>
                <span className="c-toggle__text">{label}</span>
            </Label>
        </View>
    );
};
