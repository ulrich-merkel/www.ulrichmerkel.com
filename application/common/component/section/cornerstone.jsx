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
import { ModuleCornerstone } from '../module/cornerstone';

/**
 * Function representing a component to return a single react child element.
 *
 * @param {object} [props] - The current component props
 * @param {Array|string} [props.children] - The component dom node childs, usally an array of components, if there is only a single child it's a string
 * @param {object} [props.content={}] - The content config input
 * @returns {ReactElement} React component markup
 */
export function SectionCornerstone(props) {
    const { children, content, ...moduleProps } = props;

    return (
        <SectionCommonGridSpaced>
            <ModuleArticle
                itemType={'https://schema.org/Article'}
                {...{ content }}
            >
                <ModuleCornerstone {...{ content }} {...moduleProps}>
                    {children}
                </ModuleCornerstone>
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
SectionCornerstone.propTypes = {
    children: PropTypes.node, // eslint-disable-line react/require-default-props
    content: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.array,
            PropTypes.object
        ])
    )
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 */
SectionCornerstone.defaultProps = {
    content: {}
};
