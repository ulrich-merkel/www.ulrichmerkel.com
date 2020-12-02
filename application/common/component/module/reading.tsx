/**
 * Es6 module for a reading module.
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
    itemType?: string;
    role?: string;
};

/**
 * Function representing a reading module.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const ModuleReading: FunctionComponent<Props> = (props) => {
    const { children, className, content, itemType, role } = props;

    if (!isValidArray(content?.list)) {
        return null;
    }

    const componentClassName = classnames(
        'm-list--reading',
        'm-reading',
        className
    );

    return (
        <List className={componentClassName} {...{ itemType, role }}>
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
        </List>
    );
};
