/* eslint-disable immutable/no-mutation */
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
 * @requires prop-types
 * @requires classnames
 * @requires shortid
 * @requires common/component/element/paragraph
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import shortid from 'shortid';

import P from '../../element/paragraph';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] - The current component props
 * @param {Array<string>} [props.content] - The content's text
 * @param {boolean} [props.hasColumns2=false] - Whether the component text should be clusted in columns via css or not
 * @param {boolean} [props.isCentered=false] - Whether the component text should be centered via css or not
 * @returns {ReactElement|null} React component markup
 */
function ModuleTextContent(props) {
    const {
        content,
        hasColumns2,
        isCentered
    } = props;

    if (!Array.isArray(content) || !content.length) {
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
            {content.map(function (html) {
                return (
                    <P key={shortid.generate()} dangerouslySetInnerHTML={{ __html: html }} />
                );
            })}
        </div>
    );
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 */
ModuleTextContent.propTypes = {
    content: PropTypes.arrayOf(PropTypes.string), // eslint-disable-line react/require-default-props
    hasColumns2: PropTypes.bool,
    isCentered: PropTypes.bool
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 */
ModuleTextContent.defaultProps = {
    hasColumns2: false,
    isCentered: false
};

export default ModuleTextContent;
