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
 *
 * @changelog
 * - 0.0.4 Added SectionCommonGridDefault
 * - 0.0.3 Moved to stateless function
 * - 0.0.2 Rewritten for es2015
 * - 0.0.1 Basic functions and structure
 */
import * as React from 'react';
import PropTypes from 'prop-types';

import SectionCommonGridSpaced from './common/grid-spaced';
import ModuleArticle from '../module/article';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @param {Array|string} [props.children] - The component dom node childs, usally an array of components, if there is only a single child it's a string
 * @param {object} [props.content={}] - The content config input
 * @param {boolean} [props.isMain=false] - Whether the component text should be displayed as main article or not
 * @returns {ReactElement} React component markup
 */
function SectionContact(props) {
    const { children, content, isMain, ...moduleProps } = props;

    return (
        <SectionCommonGridSpaced>
            <ModuleArticle {...{ content, isMain }} {...moduleProps}>
                {children}
            </ModuleArticle>
        </SectionCommonGridSpaced>
    );
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
 */
SectionContact.propTypes = {
    children: PropTypes.node, // eslint-disable-line react/require-default-props
    content: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.array,
            PropTypes.object
        ])
    ),
    isMain: PropTypes.bool
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 */
SectionContact.defaultProps = {
    content: {},
    isMain: false
};

export default SectionContact;
