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
        }[]
    };
    htmlElement?: keyof JSX.IntrinsicElements;
    itemType?: string;
}

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
        ...otherProps
    } = props;

    if (!Array.isArray(content.list) || !content.list.length) {
        return null;
    }

    const componentClassName = classnames(
        'm-menu',
        content.name ? `m-menu--${content.name}` : '',
        className
    );
    const componentSchema = itemType ? { itemScope: true, itemType } : null;

    return (
        <HtmlElement
            className={componentClassName}
            role="menu"
            {...componentSchema}
            {...otherProps}
        >
            {Array.isArray(content.list) && content.list.map(function (value) {
                return (
                    <ModuleMenuItem
                        key={shortid.generate()}
                        path={value.path}
                        title={value.title}
                        label={value.label}
                        itemType={value.itemType}
                        icon={value.icon}
                        isLabelHidden={value.isLabelHidden}
                        itemPropA={value.itemPropA}
                    >
                        {value.metaLinkUrl && (
                            <link itemProp="url" href={value.metaLinkUrl} />
                        )}
                    </ModuleMenuItem>
                );
            })}
            {children}
        </HtmlElement>
    );
}
