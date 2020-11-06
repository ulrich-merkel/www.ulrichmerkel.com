/* eslint-disable immutable/no-mutation */
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
import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ArticleHeadline from './article/headline';
import ArticleLead from './article/lead';
import ArticleButton from './article/button';
import { Meta } from '../element/meta';

/**
 * Function representing a component to return a single react child element.
 *
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export function ModuleArticle(props) {
    const {
        componentType,
        className,
        isDialog,
        itemType,
        isMain,
        isSpaced,
        noMargin,
        content,
        children,
        ...otherProps
    } = props;

    const ComponentType = componentType;
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
        <ComponentType
            className={componentClassName}
            itemScope
            itemType={itemType}
            {...otherProps}
        >
            <ArticleHeadline
                className={composedHeadlineClassName}
                text={content.headline}
                {...{ isMain }}
            />
            <ArticleLead className={'m-article__lead'} text={content.lead} />
            <div className="m-article__text" itemProp="text">
                {children}
            </div>
            <ArticleButton
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
        </ComponentType>
    );
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
 * @property {string} [componentType='article'] - The component element type used for React.createElement
 * @property {string} [className] - The component css class names, will be merged into component default classNames
 * @property {string} [isDialog] -
 * @property {boolean} [isMain=false] - Whether the component text should be displayed as main article or not
 * @property {boolean} [noMargin=false] - Whether the component has no css margin or not
 * @property {boolean} [isSpaced=false] - Whether the component headline has a spaced grid or not
 * @property {string} [itemType='https://schema.org/Article'] - The schema.org itemtype url attribute
 * @property {Array|string} [children] - The component dom node childs, usally an array of components, if there is only a single child it's a string
 * @property {object} [content={}] - The component translation config
 */
ModuleArticle.propTypes = {
    componentType: PropTypes.string,
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    isDialog: PropTypes.bool,
    isMain: PropTypes.bool,
    noMargin: PropTypes.bool,
    isSpaced: PropTypes.bool,
    itemType: PropTypes.string,
    children: PropTypes.node, // eslint-disable-line react/require-default-props
    content: PropTypes.shape({
        btnTo: PropTypes.string,
        btnLabel: PropTypes.string,
        btnTitle: PropTypes.string,
        headline: PropTypes.string,
        lead: PropTypes.string,
        datePublished: PropTypes.string,
        author: PropTypes.string
    })
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 * @see ModuleArticle.propTypes
 */
ModuleArticle.defaultProps = {
    isDialog: false,
    componentType: 'article',
    itemType: 'https://schema.org/Article',
    isSpaced: false,
    isMain: false,
    noMargin: false,
    content: {}
};
