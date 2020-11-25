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
import { SectionList } from '../section/list';

type Props = {
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
const Page: FunctionComponent<Props> = (props) => {
    const { content, isDialog = false } = props;
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
};

export const PageBroadcast = addPageTracking(addContent('PageBroadcast')(Page));
