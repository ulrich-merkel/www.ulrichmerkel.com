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

import { ModuleLanguageItem } from './language/item';
import { getItemTypeAttributes } from '../utils/micro-data';
import { isValidArray } from '../../utils/array';

type Props = {
    children?: ReactNode;
    className?: string;
    content?: {
        list: {
            headline: string;
            lead: string;
            percent: number;
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
export const ModuleLanguage: FunctionComponent<Props> = (props) => {
    const {
        children,
        className,
        content,
        htmlElement: HtmlElement = 'ul',
        itemType = 'https://schema.org/ItemList',
        role = 'list'
    } = props;

    if (!isValidArray(content?.list)) {
        return null;
    }

    const componentClassName = classnames('m-language', className);
    const itemTypeAttributes = getItemTypeAttributes(itemType);

    return (
        <HtmlElement
            className={componentClassName}
            {...itemTypeAttributes}
            {...{ role }}
        >
            {content.list.map(function fnMap(value) {
                return (
                    <ModuleLanguageItem
                        key={shortid.generate()}
                        headline={value.headline}
                        lead={value.lead}
                        percent={value.percent}
                    />
                );
            })}
            {children}
        </HtmlElement>
    );
};
