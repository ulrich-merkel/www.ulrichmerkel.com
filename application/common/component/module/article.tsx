/**
 * Es6 module for an article module.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, FunctionComponent, ReactNode } from 'react';
import classnames from 'classnames';

import { Meta } from '../element/meta';
import { View } from '../element/view';
import { Article } from '../element/article';
import { ModuleArticleHeadline } from './article/headline';
import { ModuleArticleLead } from './article/lead';
import { ModuleArticleButton } from './article/button';

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
    isDialog?: boolean;
    isMain?: boolean;
    isSpaced?: boolean;
    itemType?: string;
    noMargin?: boolean;
};

/**
 * Function representing an article module.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const ModuleArticle: FunctionComponent<Props> = (props) => {
    const {
        children,
        className,
        content,
        isDialog = false,
        isMain = false,
        isSpaced = false,
        noMargin = false
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
        <Article className={componentClassName}>
            <ModuleArticleHeadline
                className={composedHeadlineClassName}
                text={content?.headline}
                {...{ isMain }}
            />
            <ModuleArticleLead
                className="m-article__lead"
                text={content?.lead}
            />
            <View className="m-article__text" itemProp="text">
                {children}
            </View>
            <ModuleArticleButton
                btnTo={content?.btnTo}
                btnLabel={content?.btnLabel}
                btnTitle={content?.btnTitle}
                className="m-article__button"
                {...{ isDialog }}
            />
            <Meta itemProp="name" content={content?.headline} />
            <Meta itemProp="author" content={content?.author} />
            <Meta itemProp="datePublished" content={content?.datePublished} />
        </Article>
    );
};
