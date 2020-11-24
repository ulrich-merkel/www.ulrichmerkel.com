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
    htmlElement?: string;
    role?: string;
};

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @param {string} [props.className] - The component css class names, will be merged into component default classNames
 * @param {string} [props.htmlElement='nav'] - The component element type used for React.createElement
 * @returns {ReactElement} React component markup
 */
export const Nav: FunctionComponent<Props> = (props) => {
    const { htmlElement: HtmlElement = 'nav', className, role = 'navigation', ...otherProps } = props;

    const composedClassName = classnames('m-nav', className);

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <HtmlElement
            className={composedClassName}
            {...{ role }}
            {...otherProps}
        />
    );
}

