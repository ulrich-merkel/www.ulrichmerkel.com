/**
 * Es6 module for a menu list item.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, FunctionComponent, ReactNode } from 'react';
import classnames from 'classnames';

import { ListItem } from '../../element/list-item';

type Props = {
    children?: ReactNode;
    className?: string;
    itemProp?: string;
    itemType?: string;
};

/**
 * Function representing a menu list item.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const ModuleMenuListItem: FunctionComponent<Props> = (props) => {
    const {
        children,
        className,
        itemProp = 'itemListElement',
        itemType = 'http://www.schema.org/SiteNavigationElement'
    } = props;

    const componentClassName = classnames('m-menu__list-item', className);

    return (
        <ListItem className={componentClassName} {...{ itemProp, itemType }}>
            {children}
        </ListItem>
    );
};
