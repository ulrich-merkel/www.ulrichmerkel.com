/**
 * Es6 module for React Component.
 * Component module React classes combine elements to
 * bigger parts of the page.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, FunctionComponent, ReactNode } from 'react';
import classnames from 'classnames';
import shortid from 'shortid';

import { ModuleFeaturedItem } from './featured/item';

type Props = {
    children?: ReactNode;
    className?: string;
    htmlElement?: keyof JSX.IntrinsicElements;
    content?: {
        list: {
            path: string;
            headline: string;
            lead: string;
            img: Record<string, unknown>;
        }[];
    };
    itemType?: string;
};

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const ModuleFeatured: FunctionComponent<Props> = (props) => {
    const {
        children,
        className,
        content,
        htmlElement: HtmlElement = 'ul',
        itemType = 'https://schema.org/ItemList',
        ...otherProps
    } = props;

    if (!content || !content.list || !content.list.length) {
        return null;
    }

    const componentClassName = classnames('m-featured', className);
    const componentSchema = itemType ? { itemScope: true, itemType } : null;

    return (
        <HtmlElement
            className={componentClassName}
            role="list"
            {...componentSchema}
            {...otherProps}
        >
            {content.list.map((value) => {
                return (
                    <ModuleFeaturedItem
                        key={shortid.generate()}
                        path={value.path}
                        headline={value.headline}
                        lead={value.lead}
                        img={value.img}
                    />
                );
            })}
            {children}
        </HtmlElement>
    );
};
