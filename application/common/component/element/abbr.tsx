/**
 * Rendering an abbr html tag.
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
    itemProp?: string;
    title?: string;
};

/**
 * Function representing a html abbr element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const Abbr: FunctionComponent<Props> = (props) => {
    const {
        children,
        className,
        htmlElement: HtmlElement = 'abbr',
        itemProp,
        title
    } = props;

    const composedClassName = classnames('c-type--abbr', className);

    return (
        <HtmlElement className={composedClassName} {...{ itemProp, title }}>
            {children}
        </HtmlElement>
    );
};
