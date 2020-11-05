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

import addPageTracking from '../decorator/add-page-tracking';
import addContent from '../decorator/add-content';
import { getContentSection } from '../../utils/content';
import { LayoutMain } from '../layout/main';
import SectionSearch from '../section/search';
import ModuleSearch from '../module/search';
import ModuleFormSearch from '../module/form/search'; // eslint-disable-line import/no-named-as-default

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

    const pageSearchContent = (
        <SectionSearch content={contentSection('section1')} isMain isDialog>
            <ModuleFormSearch content={contentSection('formSearch')} />
            <ModuleSearch isMain>{children}</ModuleSearch>
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
}

export const PageSearch = addPageTracking(addContent('PageSearch')(Page));
