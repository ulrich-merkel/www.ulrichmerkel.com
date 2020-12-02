/**
 * Rendering a header html tag.
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
    itemType?: string;
    role?: string;
};

/**
 * Function representing a html header element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const Header: FunctionComponent<Props> = (props) => {
    const {
        children,
        className,
        htmlElement: HtmlElement = 'header',
        itemType,
        role = 'banner'
    } = props;

    const composedClassName = classnames('c-header', className);
    const itemTypeAttributes = getItemTypeAttributes(itemType);

    return (
        <HtmlElement
            className={composedClassName}
            {...itemTypeAttributes}
            {...{ role }}
        >
            {children}
        </HtmlElement>
    );
};
