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
import SectionKeyVisual from '../section/key-visual';
import SectionText from '../section/text';
import SectionService from '../section/service';
import SectionFeatured from '../section/featured';

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
            <SectionKeyVisual
                content={contentSection('section1')}
                className="hide-on-print"
                isCovered
            />
            <SectionText content={contentSection('section2')} isMain />
            <SectionService content={contentSection('section3')} />
            <SectionFeatured content={contentSection('section4')} />
        </LayoutMain>
    );
}

export const PageHome = addPageTracking(addContent('PageHome')(Page));
