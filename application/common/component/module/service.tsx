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

import { ModuleServiceItem } from './service/item';
import { getItemTypeAttributes } from '../utils/micro-data';
import { isValidArray } from '../../utils/array';

type List = {
    headline?: string;
    icon?: string;
    iconClassName?: string;
    isClear?: boolean;
    text?: string;
}[];

type Props = {
    children?: ReactNode;
    className?: string;
    content?: {
        list?: List;
    };
    htmlElement?: keyof JSX.IntrinsicElements;
    itemType?: string;
    role?: string;
};

/**
 * Helper function to insert clear items in array to ease css timeline
 * view floating.
 *
 * @private
 * @param {Array} list - The source array
 * @returns {Array} The converted list
 */
export function insertClearedListItems(list: List): List {
    let array = Array.from(list); // eslint-disable-line prefer-const
    const { length } = array;

    if (array && length) {
        const lengthAfterInsert = length * 1.5;

        if (length >= 2) {
            for (let i = 2; i < lengthAfterInsert; i = i + 3) {
                array.splice(i, 0, {
                    isClear: true
                });
            }
        }
    }

    return array;
}

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const ModuleService: FunctionComponent<Props> = (props) => {
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

    const componentClassName = classnames('m-service', className);
    const itemTypeAttributes = getItemTypeAttributes(itemType);

    return (
        <HtmlElement
            className={componentClassName}
            {...itemTypeAttributes}
            {...{ role }}
            {...otherProps}
        >
            {insertClearedListItems(content.list).map(function fnMap(
                value,
                index
            ) {
                return (
                    <ModuleServiceItem
                        key={shortid.generate()}
                        headline={value.headline}
                        text={value.text}
                        isClear={value.isClear}
                        index={index}
                        icon={value.icon}
                    />
                );
            })}
            {children}
        </HtmlElement>
    );
};
