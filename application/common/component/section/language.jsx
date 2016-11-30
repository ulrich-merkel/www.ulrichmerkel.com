/**
 * Es6 module for React Component.
 * Section components combine modules and elements
 * to create a page section which could be easily
 * used in page components.
 *
 * @file
 * @module
 * @flow weak
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.4
 *
 * @requires react
 * @requires component/section/common/grid-spaced
 * @requires component/module/article
 * @requires component/module/language
 *
 * @changelog
 * - 0.0.4 added SectionCommonGridDefault
 * - 0.0.3 moved to stateless function
 * - 0.0.2 rewritten for es2015
 * - 0.0.1 basic functions and structure
 */
import React, { PropTypes } from 'react';

import SectionCommonGridSpaced from './common/grid-spaced';
import ModuleArticle from './../module/article';
import ModuleLanguage from './../module/language';

/**
 * Function representing a component to return a single react child element.
 *
 * @constructor
 * @param {Object} [props] The current component props
 * @returns {ReactElement} React component markup
 */
function SectionLanguage(props) {

    const {
        children,
        content,
        ...moduleProps
    } = props;

    return (
        <SectionCommonGridSpaced>
            <ModuleArticle {...{ content }}>
                <ModuleLanguage {...{ content }} {...moduleProps}>
                    {children}
                </ModuleLanguage>
            </ModuleArticle>
        </SectionCommonGridSpaced>
    );

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {Array|string} [children] The component dom node childs - usally an array of components, if there is only a single child it's a string
 * @property {Object} [content] The content config input
 */
SectionLanguage.propTypes = {
    children: PropTypes.node,
    content: PropTypes.object
};

export default SectionLanguage;
