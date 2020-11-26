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

type Props = {
    children: ReactNode;
    content: Record<string, unknown>;
    isDialog?: boolean;
    isMain?: boolean;
};

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @param {Array|string} [props.children] - The component dom node childs - usally an array of components, if there is only a single child it's a string
 * @param {object} [props.content={}] - The content config input
 * @param {boolean} [props.isDialog=false] - Whether the component text should be displayed in a dialog or not
 * @param {boolean} [props.isMain=false] - Whether the component text should be displayed as main article or not
 * @returns {ReactElement} React component markup
 */
export const SectionSearch: FunctionComponent<Props> = (props) => {
    const { children, content, isDialog, isMain } = props;

    return (
        <SectionCommonGridSpaced>
            <ModuleArticle {...{ content, isMain, isDialog }}>
                {children}
            </ModuleArticle>
        </SectionCommonGridSpaced>
    );
};
