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
import SectionList from '../section/list';

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
    const { content, isDialog } = props;
    const contentSection = getContentSection(content);

    if (isDialog) {
        return (
            <SectionList content={contentSection('section1')} isMain isDialog />
        );
    }

    return (
        <LayoutMain>
            <Helmet {...contentSection('head')} />
            <SectionList content={contentSection('section1')} isMain />
        </LayoutMain>
    );
}

export const PageBroadcast = addPageTracking(addContent('PageBroadcast')(Page));
