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
 * @requires react-helmet
 * @requires common/component/decorator/add-page-tracking
 * @requires common/component/decorator/add-content
 * @requires common/utils/content
 * @requires common/component/layout/main
 * @requires common/component/section/text
 * @requires common/component/section/cornerstone
 * @requires common/component/section/service
 * @requires common/component/section/language
 * @requires common/component/section/reading
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
import SectionText from './../section/text';
import SectionCornerstone from './../section/cornerstone';
import SectionService from './../section/service';
import SectionLanguage from './../section/language';
import SectionReading from './../section/reading';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
function PagePersona(props) {

    const contentSection = getContentSection(props.content);

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

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {Object} [content={}] - The component translation config
 */
PagePersona.propTypes = {
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
 * @see PagePersona.propTypes
 */
PagePersona.defaultProps = {
    content: {}
};

export default addPageTracking(addContent('PagePersona')(PagePersona));
