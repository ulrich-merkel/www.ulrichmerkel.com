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
 * @requires common/component/module/reading
 *
 * @changelog
 * - 0.0.4 Added SectionCommonGridDefault
 * - 0.0.3 Moved to stateless function
 * - 0.0.2 Rewritten for es2015
 * - 0.0.1 Basic functions and structure
 */
import React, { PropTypes } from 'react';

import SectionCommonGridSpaced from './common/grid-spaced';
import ModuleArticle from './../module/article';
import ModuleReading from './../module/reading';

/**
 * Function representing a component to return a single react child element.
 *
 * @constructor
 * @param {Object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
function SectionReading(props) {

    const {
        children,
        content,
        ...moduleProps
    } = props;

    return (
        <SectionCommonGridSpaced>
            <ModuleArticle {...{ content }}>
                <ModuleReading {...{ content }} {...moduleProps}>
                    {children}
                </ModuleReading>
            </ModuleArticle>
        </SectionCommonGridSpaced>
    );

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {Array|string} [children] - The component dom node childs, usally an array of components, if there is only a single child it's a string
 * @property {Object} [content] - The content config input
 */
SectionReading.propTypes = {
    children: PropTypes.node,
    content: PropTypes.object
};

export default SectionReading;
