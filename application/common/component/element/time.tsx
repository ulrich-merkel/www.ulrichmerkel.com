/**
 * Rendering a time html tag.
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
    itemProp?: string;
};

/**
 * Function representing a html time element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const Time: FunctionComponent<Props> = (props) => {
    const { children, className, itemProp } = props;

    const composedClassName = classnames('c-time', className);

    return (
        <time className={composedClassName} {...{ itemProp }}>
            {children}
        </time>
    );
};
