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
import { isValidArray } from '../../utils/array';
import { getItemTypeAttributes } from '../utils/micro-data';

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
    role?: string;
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
        children,
        className,
        content,
        htmlElement: HtmlElement = 'ul',
        itemType = 'https://schema.org/ItemList',
        role = 'list',
        ...otherProps
    } = props;

    if (!isValidArray(content?.list)) {
        return null;
    }

    const componentClassName = classnames(
        'm-list--reading',
        'm-reading',
        className
    );
    const itemTypeAttributes = getItemTypeAttributes(itemType);

    return (
        <HtmlElement
            className={componentClassName}
            {...itemTypeAttributes}
            {...{ role }}
            {...otherProps}
        >
            {content.list.map(function fnMap(value) {
                const { creator, headline, lead, publisher } = value;
                return (
                    <ModuleReadingItem
                        key={shortid.generate()}
                        {...{
                            creator,
                            headline,
                            lead,
                            publisher
                        }}
                    />
                );
            })}
            {children}
        </HtmlElement>
    );
};
