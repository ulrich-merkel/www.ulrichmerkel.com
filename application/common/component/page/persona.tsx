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

import { addContent } from '../decorator/add-content';
import { addPageTracking } from '../decorator/add-page-tracking';
import { getContentSection } from '../../utils/content';
import { LayoutMain } from '../layout/main';
import { SectionCornerstone } from '../section/cornerstone';
import { SectionLanguage } from '../section/language';
import { SectionReading } from '../section/reading';
import { SectionService } from '../section/service';
import { SectionText } from '../section/text';

type Props = {
    content: {};
};

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @param {object} [props.content={}] - The component translation config
 * @returns {ReactElement} React component markup
 */
const Page: FunctionComponent<Props> = (props) => {
    const { content } = props;
    const contentSection = getContentSection(content);

    return (
        <LayoutMain>
            <Helmet {...contentSection('head')} />
            <SectionText content={contentSection('section1')} isMain />
            <SectionCornerstone content={contentSection('section2')} />
            <SectionService content={contentSection('section3')} />
            <SectionLanguage content={contentSection('section4')} />
            <SectionReading content={contentSection('section5')} />
        </LayoutMain>
    );
};

export const PagePersona = addPageTracking(addContent('PagePersona')(Page));
