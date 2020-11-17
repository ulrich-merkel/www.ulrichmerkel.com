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
import { SectionText } from '../section/text';

type PageProps = {
    content: {};
};

/**
 * Function representing a component to return a single react child element.
 *
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
function Page(props: PageProps) {
    const { content } = props;
    const contentSection = getContentSection(content);

    return (
        <LayoutMain>
            <Helmet {...contentSection('head')} />
            <SectionText content={contentSection('section1')} isMain />
        </LayoutMain>
    );
}

export const PageNotFound = addPageTracking(addContent('PageNotFound')(Page));
