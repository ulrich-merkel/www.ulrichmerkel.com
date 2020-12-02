/**
 * Rendering a nav html tag.
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
    role?: string;
};

/**
 * Function representing a html nav element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const Nav: FunctionComponent<Props> = (props) => {
    const { children, className, role = 'navigation' } = props;

    const composedClassName = classnames('m-nav', className);

    return (
        <nav className={composedClassName} {...{ role }}>
            {children}
        </nav>
    );
};
