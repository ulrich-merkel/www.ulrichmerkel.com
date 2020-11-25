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

import { ModuleReadingItem } from './reading/item';

type Props = {
    children?: ReactNode;
    className?: string;
    content?: {
        list: {
            creator: string;
            headline: string;
            lead: string;
            publisher: string;
        }[];
    };
    htmlElement?: keyof JSX.IntrinsicElements;
    itemType?: string;
};

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const ModuleReading: FunctionComponent<Props> = (props) => {
    const {
        htmlElement: HtmlElement = 'ul',
        className,
        itemType = 'https://schema.org/ItemList',
        content,
        children,
        ...otherProps
    } = props;

    if (!content.list || !content.list.length) {
        return null;
    }

    const componentClassName = classnames(
        'm-list--reading',
        'm-reading',
        className
    );
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
                    <ModuleReadingItem
                        key={shortid.generate()}
                        headline={value.headline}
                        lead={value.lead}
                        creator={value.creator}
                        publisher={value.publisher}
                    />
                );
            })}
            {children}
        </HtmlElement>
    );
};
