/**
 * Es6 module for a menu module.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, FunctionComponent, ReactNode } from 'react';
import classnames from 'classnames';
import shortid from 'shortid';

import { isValidArray } from '../../utils/array';
import { isValidString } from '../../utils/string';
import { List } from '../element/list';
import { ModuleMenuListItem } from './menu/list-item';
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
        }[];
    };
    itemType?: string;
    role?: string;
};

/**
 * Function representing a menu module.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement|null} React component markup
 */
export const ModuleMenu: FunctionComponent<Props> = (props) => {
    const {
        children,
        className,
        content = {},
        itemType,
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

    return (
        <List className={componentClassName} {...{ itemType, role }}>
            {content.list.map(function fnMap(value) {
                const {
                    icon,
                    isLabelHidden,
                    itemPropA,
                    itemType: itemTypeA,
                    label,
                    metaLinkUrl,
                    path,
                    title
                } = value;

                return (
                    <ModuleMenuListItem
                        key={shortid.generate()}
                        itemType={itemTypeA}
                    >
                        <ModuleMenuItem
                            itemProp={itemPropA}
                            {...{
                                icon,
                                isLabelHidden,
                                label,
                                path,
                                title
                            }}
                        >
                            {isValidString(metaLinkUrl) && (
                                <link itemProp="url" href={metaLinkUrl} />
                            )}
                        </ModuleMenuItem>
                    </ModuleMenuListItem>
                );
            })}
            {children}
        </List>
    );
};
