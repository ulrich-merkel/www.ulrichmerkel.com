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
 * @requires common/component/decorator/add-content
 * @requires common/component/decorator/add-page-tracking
 * @requires common/utils/content
 * @requires common/component/layout/main
 * @requires common/component/section/cornerstone
 * @requires common/component/section/language
 * @requires common/component/section/reading
 * @requires common/component/section/service
 * @requires common/component/section/text
 *
 * @changelog
 + - 0.0.3 Moved to stateless function
 * - 0.0.2 Rewritten for es2015
 * - 0.0.1 Basic functions and structure
 */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import {
    addContent,
    addPageTracking
} from '../decorator';
import { getContentSection } from '../../utils/content';
import LayoutMain from '../layout/main';
import {
    SectionCornerstone,
    SectionLanguage,
    SectionReading,
    SectionService,
    SectionText
} from '../section';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] - The current component props
 * @param {Object} [props.content={}] - The component translation config
 * @returns {ReactElement} React component markup
 */
function PagePersona(props) {
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
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
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
 */
PagePersona.defaultProps = {
    content: {}
};

export default addPageTracking(addContent('PagePersona')(PagePersona));
