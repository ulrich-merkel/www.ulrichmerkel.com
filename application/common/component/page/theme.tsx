/**
 * Es6 module for React Component.
 * Page components combine section components to the
 * overall page layout.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import * as React from 'react';
import Helmet from 'react-helmet';

import { addPageTracking } from '../decorator/add-page-tracking';
import { addContent } from '../decorator/add-content';
import { getContentSection } from '../../utils/content';
import { LayoutMain } from '../layout/main';
import { SectionSearch } from '../section/search';
import { ModuleFormThemeConnected } from '../module/form/theme';

type PageProps = {
    content: {};
    isDialog?: boolean;
};

/**
 * Function representing a component to return a single react child element.
 *
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
function Page(props: PageProps) {
    const { content, isDialog, children } = props;
    const contentSection = getContentSection(content);

    const pageThemeContent = (
        <SectionSearch content={contentSection('section1')} isMain isDialog>
            <ModuleFormThemeConnected content={contentSection('formTheme')} />
            {children}
        </SectionSearch>
    );

    if (isDialog) {
        return pageThemeContent;
    }

    return (
        <LayoutMain>
            <Helmet {...contentSection('head')} />
            {pageThemeContent}
        </LayoutMain>
    );
}

export const PageTheme = addPageTracking(addContent('PageTheme')(Page));
