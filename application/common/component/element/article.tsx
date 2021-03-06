/**
 * Rendering an article html tag.
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
    itemProp?: string;
    itemType?: string;
};

/**
 * Function representing a html article element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const Article: FunctionComponent<Props> = (props) => {
    const {
        children,
        className,
        itemProp,
        itemType = 'https://schema.org/Article'
    } = props;

    const composedClassName = classnames('c-type--article', className);
    const itemTypeAttributes = getItemTypeAttributes(itemType);

    return (
        <article
            className={composedClassName}
            {...itemTypeAttributes}
            {...{ itemProp }}
        >
            {children}
        </article>
    );
};
