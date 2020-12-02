/**
 * Rendering a fieldset html element.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, FunctionComponent, ReactNode } from 'react';
import classnames from 'classnames';

type Props = {
    children?: ReactNode;
    className?: string;
};

/**
 * Function representing a html fieldset element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const Fieldset: FunctionComponent<Props> = (props) => {
    const { children, className } = props;

    const componentClassName = classnames(
        'c-fieldset',
        'm-form__fieldset',
        className
    );

    return <fieldset className={componentClassName}>{children}</fieldset>;
};
