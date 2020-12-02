/**
 * Es6 module for a featured module.
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
import { List } from '../element/list';
import { ModuleFeaturedItem } from './featured/item';

type Props = {
    children?: ReactNode;
    className?: string;
    content?: {
        list: {
            path: string;
            headline: string;
            lead: string;
            img: Record<string, unknown>;
        }[];
    };
    itemType?: string;
    role?: string;
};

/**
 * Function representing a featured module.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const ModuleFeatured: FunctionComponent<Props> = (props) => {
    const { children, className, content, itemType, role } = props;

    if (!isValidArray(content?.list)) {
        return null;
    }

    const componentClassName = classnames('m-featured', className);

    return (
        <List className={componentClassName} {...{ itemType, role }}>
            {content.list.map(function fnMap(value) {
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
        </List>
    );
};
