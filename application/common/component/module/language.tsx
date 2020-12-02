/**
 * Es6 module for a language module.
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
import { ModuleLanguageItem } from './language/item';

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
    itemType?: string;
    role?: string;
};

/**
 * Function representing a language module.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const ModuleLanguage: FunctionComponent<Props> = (props) => {
    const { children, className, content, itemType, role } = props;

    if (!isValidArray(content?.list)) {
        return null;
    }

    const componentClassName = classnames('m-language', className);

    return (
        <List className={componentClassName} {...{ itemType, role }}>
            {content.list.map(function fnMap(value) {
                const { headline, lead, percent } = value;

                return (
                    <ModuleLanguageItem
                        key={shortid.generate()}
                        {...{
                            headline,
                            lead,
                            percent
                        }}
                    />
                );
            })}
            {children}
        </List>
    );
};
