/* eslint-disable immutable/no-mutation */
/**
 * Es6 module for React Component.
 * Page components combine section components to the
 * overall page layout.
 *
 * @file
 * @module
 * @flow weak
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.3
 *
 * @requires react
 * @requires prop-types
 * @requires react-helmet
 * @requires common/component/decorator/add-page-tracking
 * @requires common/component/decorator/add-content
 * @requires common/utils/content
 * @requires common/component/layout/main
 * @requires common/component/section/list
 *
 * @changelog
 + - 0.0.3 Moved to stateless function
 * - 0.0.2 Rewritten for es2015
 * - 0.0.1 Basic functions and structure
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import addPageTracking from '../decorator/add-page-tracking';
import addContent from '../decorator/add-content';
import { getContentSection } from '../../utils/content';
import LayoutMain from '../layout/main';
import SectionSearch from '../section/search';
import ModuleFormTheme from '../module/form/theme'; // eslint-disable-line import/no-named-as-default

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
function PageTheme(props) {
    const { content, isDialog, children } = props;
    const contentSection = getContentSection(content);

    const pageThemeContent = (
        <SectionSearch content={contentSection('section1')} isMain isDialog>
            <ModuleFormTheme content={contentSection('formTheme')} />
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

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
 * @property {boolean} children
 * @property {object} [content={}] - The component translation config
 * @property {boolean} isDialog
 */
PageTheme.propTypes = {
    children: PropTypes.node, // eslint-disable-line react/require-default-props
    content: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.array,
            PropTypes.object
        ])
    ),
    isDialog: PropTypes.bool
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 * @see PageSearch.propTypes
 */
PageTheme.defaultProps = {
    content: {},
    isDialog: false
};

export default addPageTracking(addContent('PageTheme')(PageTheme));
