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

import { ModuleMenuItem } from './menu/item';
import { ModuleMenuListItem } from './menu/list-item';
import { isValidArray } from '../../utils/array';
import { getItemTypeAttributes } from '../utils/micro-data';

type Props = {
    children?: ReactNode;
    className?: string;
    content?: {
        name?: string;
        list?: {
            children: ReactNode;
            icon: string;
            isLabelHidden: boolean;
            itemPropA: string;
            itemType: string;
            label: string;
            metaLinkUrl: string;
            path: string;
            title: string;
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
 * @param {Array|string} [props.children] - The component dom node childs, usally an array of components, if there is only a single child it's a string
 * @param {string} [props.className] - The component css class names, will be merged into component default classNames
 * @param {string} [props.htmlElement='ul'] - The component element type used for React.createElement
 * @param {object} [props.content={}] - The component translation config
 * @param {string} [props.itemType='https://schema.org/ItemList'] - The schema.org itemtype url attribute
 * @returns {ReactElement|null} React component markup
 */
export const ModuleMenu: FunctionComponent<Props> = (props) => {
    const {
        children,
        className,
        content = {},
        htmlElement: HtmlElement = 'ul',
        itemType = 'https://schema.org/ItemList',
        role = 'menu'
    } = props;

    if (!isValidArray(content?.list)) {
        return null;
    }

    const componentClassName = classnames(
        'm-menu',
        content.name ? `m-menu--${content.name}` : '',
        className
    );
    const itemTypeAttributes = getItemTypeAttributes(itemType);

    return (
        <HtmlElement
            className={componentClassName}
            {...itemTypeAttributes}
            {...{ role }}
        >
            {content.list.map(function fnMap(value) {
                return (
                    <ModuleMenuListItem
                        key={shortid.generate()}
                        itemType={value.itemType}
                    >
                        <ModuleMenuItem
                            path={value.path}
                            title={value.title}
                            label={value.label}
                            icon={value.icon}
                            isLabelHidden={value.isLabelHidden}
                            itemPropA={value.itemPropA}
                        >
                            {value.metaLinkUrl && (
                                <link itemProp="url" href={value.metaLinkUrl} />
                            )}
                        </ModuleMenuItem>
                    </ModuleMenuListItem>
                );
            })}
            {children}
        </HtmlElement>
    );
};
