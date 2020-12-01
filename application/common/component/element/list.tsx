/**
 * Rendering a small html tag.
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
    htmlElement?: keyof JSX.IntrinsicElements;
    itemProp?: string;
    itemType?: string;
    role?: string;
};

/**
 * Function representing a html list (ul/ol) element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const List: FunctionComponent<Props> = (props) => {
    const {
        children,
        className,
        htmlElement: HtmlElement = 'ul',
        itemProp,
        itemType,
        role
    } = props;

    const composedClassName = classnames('c-list', className);
    const itemTypeAttributes = getItemTypeAttributes(itemType);

    return (
        <HtmlElement
            className={composedClassName}
            {...{ itemProp, role }}
            {...itemTypeAttributes}
        >{children}</HtmlElement>
    );
};
