/**
 * Rendering a label html tag.
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
    htmlFor: string;
    isVisuallyHidden?: boolean;
};

/**
 * Function representing a html form label element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @param {string} [props.htmlFor] - The label for attribute
 * @param {string} [props.className] - The label css class names, will be merged into component default classNames
 * @param {boolean} [props.isVisuallyHidden] - Whether the label is visually hidden or not
 * @returns {ReactElement} React component markup
 */
export const Label: FunctionComponent<Props> = (props) => {
    const { children, className, htmlFor, isVisuallyHidden = false } = props;

    const composedClassName = classnames('m-form__label', className, {
        'is-visually-hidden': isVisuallyHidden
    });

    return (
        <label className={composedClassName} htmlFor={htmlFor}>
            {children}
        </label>
    );
};
