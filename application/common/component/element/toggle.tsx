/**
 * Rendering a small html tag.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, FunctionComponent, ReactNode } from 'react';
import classnames from 'classnames';
import { noop } from 'lodash';

import { Input } from './input';
import { Label } from './label';

type Props = {
    checked?: boolean;
    className?: string;
    htmlElement?: string;
    id?: string;
    label?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @param {string} [props.className=''] - The component css class names, will be merged into component default classNames
 * @param {string} [props.htmlElement='nav'] - The component element type used for React.createElement
 * @returns {ReactElement} React component markup
 */
export const Toggle: FunctionComponent<Props> = (props) => {
    const {
        htmlElement: HtmlElement = 'div',
        checked = false,
        className,
        id = 'toggle',
        label = '',
        onChange = noop,
        ...otherProps
    } = props;

    const composedClassName = classnames('c-toggle', className);

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <HtmlElement className={composedClassName} {...otherProps}>
            <Input
                className="c-toggle__input"
                id={id}
                name={id}
                type="checkbox"
                {...{ checked, onChange }}
            />
            <Label className="c-toggle__label" htmlFor={id}>
                <span className="c-toggle__text">{label}</span>
            </Label>
        </HtmlElement>
    );
}
