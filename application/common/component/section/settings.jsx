/* eslint-disable immutable/no-mutation */
/**
 * Es6 module for React Component.
 * Section components combine modules and elements
 * to create a page section which could be easily
 * used in page components.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import * as React from 'react';
import PropTypes from 'prop-types';

import { SectionCommonGridSpaced } from './common/grid-spaced';
import { ModuleArticle } from '../module/article';

/**
 * Function representing a component to return a single react child element.
 *
 * @param {object} [props] - The current component props
 * @param {Array|string} [props.children] - The component dom node childs - usally an array of components, if there is only a single child it's a string
 * @param {object} [props.content={}] - The content config input
 * @param {boolean} [props.isDialog=false] - Whether the component text should be displayed in a dialog or not
 * @param {boolean} [props.isMain=false] - Whether the component text should be displayed as main article or not
 * @returns {ReactElement} React component markup
 */
function SectionSettings(props) {
    const { children, content, isDialog, isMain } = props;

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
 * @type {object}
 */
SectionSettings.propTypes = {
    children: PropTypes.node, // eslint-disable-line react/require-default-props
    content: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.array,
            PropTypes.object
        ])
    ),
    isDialog: PropTypes.bool,
    isMain: PropTypes.bool
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 */
SectionSettings.defaultProps = {
    content: {},
    isDialog: false,
    isMain: false
};

export { SectionSettings };
