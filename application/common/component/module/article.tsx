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

import { ModuleArticleHeadline } from './article/headline';
import { ModuleArticleLead } from './article/lead';
import { ModuleArticleButton } from './article/button';
import { Meta } from '../element/meta';

type Props = {
    children?: ReactNode;
    className?: string;
    content?: {
        btnTo: string;
        btnLabel: string;
        btnTitle: string;
        headline: string;
        lead: string;
        datePublished: string;
        author: string;
    };
    htmlElement?: keyof JSX.IntrinsicElements;
    isDialog?: boolean;
    isMain?: boolean;
    isSpaced?: boolean;
    itemType?: string;
    noMargin?: boolean;
}

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const ModuleArticle: FunctionComponent<Props> = (props) => {
    const {
        children,
        className,
        htmlElement: HtmlElement = 'article',
        content = {},
        isDialog = false,
        isMain = false,
        isSpaced = false,
        itemType = 'https://schema.org/Article',
        noMargin = false,
        ...otherProps
    } = props;

    const componentClassName = classnames(
        {
            'is-main': isMain,
            'has-no-margin': noMargin
        },
        'm-article',
        className
    );
    const composedHeadlineClassName = classnames(
        {
            'is-spaced': isSpaced
        },
        'm-article__headline'
    );

    return (
        <HtmlElement
            className={componentClassName}
            itemScope
            itemType={itemType}
            {...otherProps}
        >
            <ModuleArticleHeadline
                className={composedHeadlineClassName}
                text={content.headline}
                {...{ isMain }}
            />
            <ModuleArticleLead
                className={'m-article__lead'}
                text={content.lead}
            />
            <div className="m-article__text" itemProp="text">
                {children}
            </div>
            <ModuleArticleButton
                btnTo={content.btnTo}
                btnLabel={content.btnLabel}
                btnTitle={content.btnTitle}
                className={'m-article__button'}
                {...{ isDialog }}
            />
            <Meta itemProp="name" content={content.headline} />
            <Meta
                itemProp="author"
                content={content.author}
                defaultContent="Ulrich Merkel"
            />
            <Meta itemProp="datePublished" content={content.datePublished} />
        </HtmlElement>
    );
}
