/* eslint-disable immutable/no-mutation */
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
 * @requires prop-types
 * @requires common/component/section/common/grid-spaced
 * @requires common/component/module/article
 * @requires common/component/module/service
 *
 * @changelog
 * - 0.0.4 Added SectionCommonGridDefault
 * - 0.0.3 Moved to stateless function
 * - 0.0.2 Rewritten for es2015
 * - 0.0.1 Basic functions and structure
 */
import React from 'react';
import PropTypes from 'prop-types';

import SectionCommonGridSpaced from './common/grid-spaced';
import ModuleArticle from '../module/article';
import ModuleService from '../module/service';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] - The current component props
 * @returns {React.Element} React component markup
 */
function SectionService(props) {

    const {
        children,
        content,
        ...moduleProps
    } = props;

    return (
        <SectionCommonGridSpaced>
            <ModuleArticle {...{ content }}>
                <ModuleService {...{ content }} {...moduleProps}>
                    {children}
                </ModuleService>
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
 * @property {Object} [content={}] - The content config input
 */
SectionService.propTypes = {
    children: PropTypes.node, // eslint-disable-line react/require-default-props
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
 * @see SectionService.propTypes
 */
SectionService.defaultProps = {
    content: {}
};

export default SectionService;
