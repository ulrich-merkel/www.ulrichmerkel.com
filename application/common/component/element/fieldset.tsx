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
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @param {string} [props.className] - The component css class names - will be merged into component default classNames
 * @returns {ReactElement} React component markup
 */
export const Fieldset: FunctionComponent<Props> = (props) => {
    const { className, ...otherProps } = props;

    const componentClassName = classnames('m-form__fieldset', className);

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <fieldset className={componentClassName} {...otherProps} />
    );
};
