/**
 * Rendering a list item element.
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
    ariaHidden?: boolean;
    children?: ReactNode;
    className?: string;
    dangerouslySetInnerHTML?: {
        __html: string;
    };
    htmlElement?: keyof JSX.IntrinsicElements;
    itemProp?: string;
    itemType?: string;
    role?: string;
};

/**
 * Function representing a html list item element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const ListItem: FunctionComponent<Props> = (props) => {
    const {
        ariaHidden,
        children,
        className,
        dangerouslySetInnerHTML,
        htmlElement: HtmlElement = 'li',
        itemProp = 'itemListElement',
        itemType,
        role
    } = props;

    const composedClassName = classnames('c-list-item', className);
    const itemTypeAttributes = getItemTypeAttributes(itemType);

    return (
        <HtmlElement
            aria-hidden={ariaHidden}
            className={composedClassName}
            {...{ dangerouslySetInnerHTML, itemProp, role }}
            {...itemTypeAttributes}
        >
            {children}
        </HtmlElement>
    );
};
