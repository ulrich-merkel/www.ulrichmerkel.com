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
import { default as React, FunctionComponent } from 'react';
import classnames from 'classnames';

import { Headline } from '../../element/headline';
import { P } from '../../element/paragraph';
import { Article } from '../../element/article';

type Props = {
    headline?: string;
    lead?: string;
};

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const ModuleKeyVisualArticle: FunctionComponent<Props> = (props) => {
    const { headline, lead } = props;

    if (!headline || !lead) {
        return null;
    }

    const componentArticleClassName = classnames('m-key-visual__text');

    return (
        <Article className={componentArticleClassName}>
            <Headline
                className="m-key-visual__headline"
                itemProp="headline"
                htmlElement="h3"
            >
                <span className="m-key-visual__boxed">{headline}</span>
            </Headline>
            <P className="m-key-visual__lead" itemProp="description">
                <span className="m-key-visual__boxed">{lead}</span>
            </P>
        </Article>
    );
};
