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
import { isValidArray } from '../../utils/array';
import { List } from '../element/list';

type ContentList = {
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
        list?: ContentList;
    };
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
export function insertClearedListItems(list?: ContentList): ContentList {
    // eslint-disable-next-line prefer-const
    let array = Array.isArray(list) && Array.from(list);
    if (!isValidArray(array)) {
        return [];
    }

    const { length } = array;
    const lengthAfterInsert = length * 1.5;

    if (length >= 2) {
        for (let i = 2; i < lengthAfterInsert; i = i + 3) {
            array.splice(i, 0, {
                isClear: true
            });
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
    const { children, className, content, itemType, role } = props;

    if (!isValidArray(content?.list)) {
        return null;
    }

    const componentClassName = classnames('m-service', className);

    return (
        <List className={componentClassName} {...{ itemType, role }}>
            {insertClearedListItems(content.list).map(function fnMap(
                value,
                index
            ) {
                const { headline, icon, isClear, text } = value;

                return (
                    <ModuleServiceItem
                        key={shortid.generate()}
                        index={index}
                        {...{
                            headline,
                            icon,
                            isClear,
                            text
                        }}
                    />
                );
            })}
            {children}
        </List>
    );
};
