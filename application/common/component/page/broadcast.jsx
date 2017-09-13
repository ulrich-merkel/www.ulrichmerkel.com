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
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import addPageTracking from '../decorator/add-page-tracking';
import addContent from '../decorator/add-content';
import { getContentSection } from '../../utils/content';
import LayoutMain from '../layout/main';
import SectionList from '../section/list';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] - The current component props
 * @returns {React.Element} React component markup
 */
function PageBroadcast(props) {
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

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {Object} [content={}] - The component translation config
 * @property {boolean} isDialog
 */
PageBroadcast.propTypes = {
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
 * @type {Object}
 * @see PageBroadcast.propTypes
 */
PageBroadcast.defaultProps = {
    content: {},
    isDialog: false
};

export default addPageTracking(addContent('PageBroadcast')(PageBroadcast));
