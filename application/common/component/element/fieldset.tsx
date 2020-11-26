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
    htmlElement?: keyof JSX.IntrinsicElements;
};

/**
 * Function representing a html fieldset element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const Fieldset: FunctionComponent<Props> = (props) => {
    const {
        className,
        htmlElement: HtmlElement = 'fieldset',
        ...otherProps
    } = props;

    const componentClassName = classnames('m-form__fieldset', className);

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <HtmlElement className={componentClassName} {...otherProps} />
    );
};
