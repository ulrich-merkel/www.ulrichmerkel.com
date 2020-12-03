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
import { getItemTypeAttributes } from '../utils/micro-data';

type Props = {
    children?: ReactNode;
    className?: string;
    cols?: number;
    htmlElement?: keyof JSX.IntrinsicElements;
    itemProp?: string;
    itemType?: string;
    role?: string;
};

/**
 * Function representing a component to return a single react child element.
 *
 * @param {object} [props] - The current component props
 * @param {string} [props.className] - The addition css classNames
 * @param {number} [props.cols=12] - The grid column cols
 * @param {string} [props.htmlElement='div'] - The component element type used for React.createElement
 * @returns {ReactElement} React component markup
 */
export const GridCol: FunctionComponent<Props> = (props) => {
    const {
        children,
        className,
        cols = 12,
        htmlElement: HtmlElement = 'div',
        itemProp,
        itemType,
        role
    } = props;

    const composedClassName = classnames(`l-grid__col--${cols}`, className);
    const itemTypeAttributes = getItemTypeAttributes(itemType);

    return (
        <HtmlElement
            className={composedClassName}
            {...itemTypeAttributes}
            {...{ itemProp, role }}
        >
            {children}
        </HtmlElement>
    );
};
