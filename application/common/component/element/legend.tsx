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
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @param {string} [props.className] - The legend css class names, will be merged into component default classNames
 * @param {boolean} [props.isVisuallyHidden] - Whether the legend is visually hidden or not
 * @returns {ReactElement} React component markup
 */
export const Legend: FunctionComponent<Props> = (props) => {
    const { className, isVisuallyHidden = false, ...otherProps } = props;

    const composedClassName = classnames('m-form__legend', className, {
        'is-visually-hidden': isVisuallyHidden
    });

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <legend className={composedClassName} {...otherProps} />
    );
};
