/**
 * Es6 module for React Component.
 * Section components combine modules and elements
 * to create a page section which could be easily
 * used in page components.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, FunctionComponent, ReactNode } from 'react';

import { SectionCommonGridSpaced } from './common/grid-spaced';
import { ModuleArticle } from '../module/article';
import { ModuleCornerstone } from '../module/cornerstone';

type Props = {
    children?: ReactNode;
    content: any;
};

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @param {Array|string} [props.children] - The component dom node childs, usally an array of components, if there is only a single child it's a string
 * @param {object} [props.content={}] - The content config input
 * @returns {ReactElement} React component markup
 */
export const SectionCornerstone: FunctionComponent<Props> = (props) => {
    const { children, content, ...otherProps } = props;

    return (
        <SectionCommonGridSpaced>
            <ModuleArticle
                itemType={'https://schema.org/Article'}
                {...{ content }}
            >
                <ModuleCornerstone {...{ content }} {...otherProps}>
                    {children}
                </ModuleCornerstone>
            </ModuleArticle>
        </SectionCommonGridSpaced>
    );
}
