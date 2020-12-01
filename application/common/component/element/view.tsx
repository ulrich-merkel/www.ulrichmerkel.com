/**
 * Rendering a small html tag.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, FunctionComponent, ReactNode } from 'react';
import { getItemTypeAttributes } from '../utils/micro-data';

type Props = {
    children?: ReactNode;
    className?: string;
    hidden?: boolean;
    htmlElement?: keyof JSX.IntrinsicElements;
    id?: string;
    itemProp?: string;
    itemType?: string;
    ref?: HTMLElement;
    role?: string;
};

/**
 * Function representing a html view.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const View: FunctionComponent<Props> = (props) => {
    const {
        children,
        className,
        hidden,
        htmlElement: HtmlElement = 'div',
        id,
        itemProp,
        itemType,
        ref,
        role,
        ...otherProps
    } = props;

    const itemTypeAttributes = getItemTypeAttributes(itemType);

    return (
        <HtmlElement
            {...{ className, hidden, id, itemProp, ref, role }}
            {...itemTypeAttributes}
            {...otherProps}
        >
            {children}
        </HtmlElement>
    );
};
