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
 * @TODO: Rename this file to something different than index, due to node folder exports
 *
 * @requires react
 * @requires react-helmet
 * @requires common/component/decorator/add-page-tracking
 * @requires common/component/decorator/add-content
 * @requires common/utils/content
 * @requires common/component/layout/main
 * @requires common/component/section/key-visual
 * @requires common/component/section/text
 * @requires common/component/section/service
 * @requires common/component/section/featured
 *
 * @changelog
 + - 0.0.3 Moved to stateless function
 * - 0.0.2 Rewritten for es2015
 * - 0.0.1 Basic functions and structure
 */
import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

import addPageTracking from './../decorator/add-page-tracking';
import addContent from './../decorator/add-content';
import { getContentSection } from './../../utils/content';
import LayoutMain from './../layout/main';
import SectionKeyVisual from './../section/key-visual';
import SectionText from './../section/text';
import SectionService from './../section/service';
import SectionFeatured from './../section/featured';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] - The current component props
 * @returns {React.Element} React component markup
 */
function PageIndex(props) {

    const contentSection = getContentSection(props.content);

    return (
        <LayoutMain>
            <Helmet {...contentSection('head')} />
            <SectionKeyVisual content={contentSection('section1')} className='hide-on-print' isCovered />
            <SectionText content={contentSection('section2')} isMain />
            <SectionService content={contentSection('section3')} />
            <SectionFeatured content={contentSection('section4')} />
        </LayoutMain>
    );

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {Object} [content={}] - The component translation config
 */
PageIndex.propTypes = {
    content: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.array,
        PropTypes.object
    ]))
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see PageIndex.propTypes
 */
PageIndex.defaultProps = {
    content: {}
};

export default addPageTracking(addContent('PageIndex')(PageIndex));
