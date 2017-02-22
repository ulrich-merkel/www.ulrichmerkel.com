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
 * @requires common/component/section/common/grid-spaced
 * @requires common/component/module/article
 * @requires common/component/module/list
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import React, { PropTypes } from 'react';

import SectionCommonGridSpaced from './common/grid-spaced';
import ModuleArticle from './../module/article';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] - The current component props
 * @returns {React.Element} React component markup
 */
function SectionSearch(props) {
    const {
        children,
        content,
        isMain,
        isDialog
    } = props;

    return (
        <SectionCommonGridSpaced>
            <ModuleArticle {...{ content, isMain, isDialog }}>
                {children}
            </ModuleArticle>
        </SectionCommonGridSpaced>
    );
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {Array|string} [children] - The component dom node childs - usally an array of components, if there is only a single child it's a string
 * @property {Object} [content={}] - The content config input
 * @property {boolean} [isMain=false] - Whether the component text should be displayed as main article or not
 */
SectionSearch.propTypes = {
    children: PropTypes.node, // eslint-disable-line react/require-default-props
    content: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.array,
        PropTypes.object
    ])),
    isMain: PropTypes.bool,
    isDialog: PropTypes.bool
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see SectionList.propTypes
 */
SectionSearch.defaultProps = {
    content: {},
    isMain: false,
    isDialog: false
};

export default SectionSearch;
