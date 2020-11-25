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
import { ModuleTextConnected } from '../module/text';

type Props = {
    children?: ReactNode;
    content: any;
    hasColumns2?: boolean;
    isCentered?: boolean;
    isMain?: boolean;
    itemType?: string;
};

/**
 * Function representing a component to return a single react child element.
 *
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const SectionText: FunctionComponent<Props> = (props) => {
    const {
        children,
        content,
        hasColumns2,
        isCentered,
        isMain,
        itemType
    } = props;

    return (
        <SectionCommonGridSpaced>
            <ModuleArticle {...{ content, isMain }}>
                <ModuleTextConnected
                    {...{ content, hasColumns2, isCentered, itemType }}
                >
                    {children}
                </ModuleTextConnected>
            </ModuleArticle>
        </SectionCommonGridSpaced>
    );
};
