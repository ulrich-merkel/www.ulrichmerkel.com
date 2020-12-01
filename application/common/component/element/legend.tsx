/**
 * Rendering a legend html tag.
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
    isVisuallyHidden?: boolean;
};

/**
 * Function representing a html legend element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @param {string} [props.className] - The legend css class names, will be merged into component default classNames
 * @param {boolean} [props.isVisuallyHidden] - Whether the legend is visually hidden or not
 * @returns {ReactElement} React component markup
 */
export const Legend: FunctionComponent<Props> = (props) => {
    const { children, className, isVisuallyHidden = false } = props;

    const composedClassName = classnames('m-form__legend', className, {
        'is-visually-hidden': isVisuallyHidden
    });

    return <legend className={composedClassName}>{children}</legend>;
};
