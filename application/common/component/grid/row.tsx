/* eslint-disable immutable/no-mutation */
/**
 * Es6 module for React Component.
 * Component grid React classes are small helpers for
 * easy maintaning the responsive css grid layout.
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
 * Function representing a component to return a single react child element.
 *
 * @param {object} [props] - The current component props
 * @param {string} [props.className] - The addition css classNames
 * @param {string} [props.htmlElement='div'] - The component element type used for React.createElement
 * @returns {ReactElement} React component markup
 */
export const GridRow: FunctionComponent<Props> = (props) => {
    const { children, className, htmlElement: HtmlElement = 'div' } = props;

    const componentClassName = classnames('l-grid__row', className);

    return <HtmlElement className={componentClassName}>{children}</HtmlElement>;
};
