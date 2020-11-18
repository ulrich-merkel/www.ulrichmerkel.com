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
import { default as React, FunctionComponent } from 'react';
import Helmet from 'react-helmet';

import { addPageTracking } from '../decorator/add-page-tracking';
import { addContent } from '../decorator/add-content';
import { getContentSection } from '../../utils/content';
import { LayoutMain } from '../layout/main';
import { SectionSearch } from '../section/search';
import { ModuleSearchConnected } from '../module/search';
import { ModuleFormSearchConnected } from '../module/form/search';

type PageProps = {
    content: {};
    isDialog?: boolean;
};

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
const Page: FunctionComponent<PageProps> = (props) => {
    const { content, isDialog, children } = props;
    const contentSection = getContentSection(content);

    const pageSearchContent = (
        <SectionSearch content={contentSection('section1')} isMain isDialog>
            <ModuleFormSearchConnected content={contentSection('formSearch')} />
            <ModuleSearchConnected isMain>{children}</ModuleSearchConnected>
        </SectionSearch>
    );

    if (isDialog) {
        return pageSearchContent;
    }

    return (
        <LayoutMain>
            <Helmet {...contentSection('head')} />
            {pageSearchContent}
        </LayoutMain>
    );
};

export const PageSearch = addPageTracking(addContent('PageSearch')(Page));
