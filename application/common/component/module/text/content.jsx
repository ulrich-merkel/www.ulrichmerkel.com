/**
 * Es6 module for React Component.
 * Component module React classes combine elements to
 * bigger parts of the page.
 *
 * @file
 * @module
 * @flow weak
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @requires react
 * @requires classnames
 * @requires common/component/element/paragraph
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import React, { PropTypes } from 'react';
import classnames from 'classnames';

import P from './../../element/paragraph';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] - The current component props
 * @returns {ReactElement|null} React component markup
 */
function ModuleTextContent(props) {

    const {
        content,
        hasColumns2,
        isCentered
    } = props;

    if (!content || !content.length) {
        return null;
    }

    const componentTextContentClassName = classnames(
        {
            'has-columns--2': hasColumns2,
            'is-centered': isCentered
        },
        'm-text__content'
    );

    return (
        <div className={componentTextContentClassName}>
            <P dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {Object} [content] - The content's text
 * @property {boolean} [hasColumns2=false] - Whether the component text should be clusted in columns via css or not
 * @property {boolean} [isCentered=false] - Whether the component text should be centered via css or not
 */
ModuleTextContent.propTypes = {
    content: PropTypes.node, // eslint-disable-line react/require-default-props
    hasColumns2: PropTypes.bool,
    isCentered: PropTypes.bool
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see ModuleTextContent.propTypes
 */
ModuleTextContent.defaultProps = {
    hasColumns2: false,
    isCentered: false
};

export default ModuleTextContent;
