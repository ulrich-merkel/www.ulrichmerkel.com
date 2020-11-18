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
import { withRouter } from 'react-router';
import Helmet from 'react-helmet';

import { addPageTracking } from '../decorator/add-page-tracking';
import { addContent } from '../decorator/add-content';
import { getContentSection } from '../../utils/content';
import { LayoutMain } from '../layout/main';
import { SectionContact } from '../section/contact';
import { ModuleFormContactConnected } from '../module/form/contact';

type PageProps = {
    content: {};
    params?: {
        state: {};
    };
};

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
const Page: FunctionComponent<PageProps> = (props) => {
    const { content, params } = props;
    const contentSection = getContentSection(content);
    const routerState = params && params.state;

    return (
        <LayoutMain>
            <Helmet {...contentSection('head')} />
            <SectionContact content={contentSection('section1')} isMain>
                <ModuleFormContactConnected
                    content={contentSection('formContact')}
                    {...{ routerState }}
                />
            </SectionContact>
        </LayoutMain>
    );
}

export const PageContact = addPageTracking(
    withRouter(addContent('PageContact')(Page))
);
