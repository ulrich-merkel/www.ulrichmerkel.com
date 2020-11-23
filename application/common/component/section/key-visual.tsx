/* eslint-disable immutable/no-mutation */
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

import { SectionCommonGrid } from './common/grid';
import { ModuleKeyVisualConnected } from '../module/key-visual';

type Props = {
    children?: ReactNode;
    content: any;
    className?: string;
    isCovered?: boolean;
    isWork?: boolean;
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
export const SectionKeyVisual: FunctionComponent<Props> = (props) => {
    const { content, children, className, isCovered, isWork } = props;

    return (
        <SectionCommonGrid>
            <ModuleKeyVisualConnected {...{ content, className, isCovered, isWork }}>
                {children}
            </ModuleKeyVisualConnected>
        </SectionCommonGrid>
    );
}
