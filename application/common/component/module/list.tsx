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

import { Headline } from '../element/headline';
import { ListItem } from '../element/list-item';
import { getItemTypeAttributes } from '../utils/micro-data';
import { isValidArray } from '../../utils/array';
import { List } from '../element/list';

type Props = {
    children?: ReactNode;
    className?: string;
    content?: Record<string, unknown>;
    htmlElement?: keyof JSX.IntrinsicElements;
    itemType?: string;
    role?: string;
};

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const ModuleList: FunctionComponent<Props> = (props) => {
    const {
        children,
        className,
        content,
        htmlElement: HtmlElement = 'ul',
        itemType = 'http://schema.org/ItemList',
        role = 'list'
    } = props;

    const componentClassName = classnames('m-list--broadcast', className);
    const itemTypeAttributes = getItemTypeAttributes(itemType);

    if (!isValidArray(content?.text)) {
        return null;
    }

    return (
        <HtmlElement
            className={componentClassName}
            {...itemTypeAttributes}
            {...{ role }}
        >
            {content.text.map(function fnMap(entry) {
                return (
                    <ListItem className="m-list__item" key={shortid.generate()}>
                        <Headline
                            className="m-list__alt-headline"
                            isCentered={false}
                            htmlElement="h3"
                        >
                            {entry.headline}
                        </Headline>
                        <List className="m-list">
                            {isValidArray(entry.list) &&
                                entry.list.map(function fnMapJob(job) {
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
        </HtmlElement>
    );
};
