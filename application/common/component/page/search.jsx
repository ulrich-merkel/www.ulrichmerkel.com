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
import ModuleSearch from '../module/search';
import ModuleFormSearch from '../module/form/search'; // eslint-disable-line import/no-named-as-default

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
function PageSearch(props) {
    const { content, isDialog, children } = props;
    const contentSection = getContentSection(content);

    const pageSearchContent = (
        <SectionSearch content={contentSection('section1')} isMain isDialog>
            <ModuleFormSearch content={contentSection('formSearch')} />
            <ModuleSearch isMain>
                {children}
            </ModuleSearch>
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

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
 * @property {boolean} children
 * @property {object} [content={}] - The component translation config
 * @property {boolean} isDialog
 */
PageSearch.propTypes = {
    children: PropTypes.node, // eslint-disable-line react/require-default-props
    content: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.array,
        PropTypes.object
    ])),
    isDialog: PropTypes.bool
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 * @see PageSearch.propTypes
 */
PageSearch.defaultProps = {
    content: {},
    isDialog: false
};

export default addPageTracking(addContent('PageSearch')(PageSearch));
