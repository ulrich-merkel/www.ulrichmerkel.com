/**
 * Es6 module for React Component.
 * Section components combine modules and elements
 * to create a page section which could be easily
 * used in page components.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.4
 *
 * @requires react
 * @requires component/section/common/grid-spaced
 * @requires component/module/article
 * @requires component/module/list
 *
 * @changelog
 * - 0.0.1 basic functions and structure
 */
import React, { PropTypes } from 'react';

import SectionCommonGridSpaced from './common/grid-spaced';
import ModuleArticle from './../module/article';
import ModuleList from './../module/list';

/**
 * Function representing a component to return a single react child element.
 *
 * @constructor
 * @param {Object} [props] The current component props
 * @returns {ReactElement} React component markup
 */
function SectionList(props) {

    var {
        children,
        content,
        isMain,
        ...moduleProps
    } = props;

    return (
        <SectionCommonGridSpaced>
            <ModuleArticle {...{ content, isMain }}>
                <ModuleList {...{ content }} {...moduleProps}>
                    {children}
                </ModuleList>
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
 * @property {boolean} [isMain] Whether the component text should be displayed as main article or not
 */
SectionList.propTypes = {
    children: PropTypes.node,
    content: PropTypes.object,
    isMain: PropTypes.bool
};

export default SectionList;
