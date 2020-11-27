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

type Props = {
    htmlElement?: keyof JSX.IntrinsicElements;
    className?: string;
    itemType?: string;
    children?: ReactNode;
    content?: Record<string, unknown>;
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
        htmlElement: HtmlElement = 'ul',
        className,
        itemType = 'http://schema.org/ItemList',
        content,
        children
    } = props;

    const componentClassName = classnames('m-list--broadcast', className);

    return (
        <HtmlElement
            className={componentClassName}
            itemScope
            itemType={itemType}
            role="list"
        >
            {content.text &&
                content.text.map((entry) => {
                    return (
                        <li className="m-list__item" key={shortid.generate()}>
                            <Headline
                                className="m-list__alt-headline"
                                isCentered={false}
                                htmlElement="h3"
                            >
                                {entry.headline}
                            </Headline>
                            <ul className="m-list">
                                {entry.list &&
                                    entry.list.map((job) => {
                                        const text = `${job.name}, ${job.job} - ${job.place}`;
                                        return (
                                            <li
                                                key={shortid.generate()}
                                                className="m-list__item"
                                                itemProp="itemListElement"
                                                dangerouslySetInnerHTML={{
                                                    __html: text
                                                }}
                                            />
                                        );
                                    })}
                            </ul>
                        </li>
                    );
                })}
            {children}
        </HtmlElement>
    );
};
