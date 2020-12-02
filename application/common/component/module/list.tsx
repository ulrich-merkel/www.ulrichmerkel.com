/**
 * Es6 module for a list module.
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
import { Headline } from '../element/headline';
import { ListItem } from '../element/list-item';
import { List } from '../element/list';

type Props = {
    children?: ReactNode;
    className?: string;
    content?: Record<string, unknown>;
    itemType?: string;
    role?: string;
};

/**
 * Function representing a list module (broadcast).
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const ModuleList: FunctionComponent<Props> = (props) => {
    const { children, className, content, itemType, role } = props;

    if (!isValidArray(content?.text)) {
        return null;
    }

    const componentClassName = classnames('m-list--broadcast', className);

    return (
        <List className={componentClassName} {...{ itemType, role }}>
            {content.text.map(function fnMap(entry) {
                const { headline, list } = entry;

                return (
                    <ListItem className="m-list__item" key={shortid.generate()}>
                        <Headline
                            className="m-list__alt-headline"
                            isCentered={false}
                            htmlElement="h3"
                        >
                            {headline}
                        </Headline>
                        <List className="m-list">
                            {isValidArray(list) &&
                                list.map(function fnMapJob(job) {
                                    const text = `${job.name}, ${job.job} - ${job.place}`;

                                    return (
                                        <ListItem
                                            key={shortid.generate()}
                                            className="m-list__item"
                                            itemProp="itemListElement"
                                            dangerouslySetInnerHTML={{
                                                __html: text
                                            }}
                                        />
                                    );
                                })}
                        </List>
                    </ListItem>
                );
            })}
            {children}
        </List>
    );
};
