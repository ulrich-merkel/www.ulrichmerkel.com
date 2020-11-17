/* eslint-disable immutable/no-mutation */
/**
 * Es6 module for React Component.
 * Component module React classes combine elements to
 * bigger parts of the page.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import shortid from 'shortid';

import { P } from '../../element/paragraph';

/**
 * Function representing a component to return a single react child element.
 *
 * @param {object} [props] - The current component props
 * @param {Array<string>} [props.content] - The content's text
 * @param {boolean} [props.hasColumns2=false] - Whether the component text should be clusted in columns via css or not
 * @param {boolean} [props.isCentered=false] - Whether the component text should be centered via css or not
 * @returns {ReactElement|null} React component markup
 */
export function ModuleTextContent(props) {
    const { content, hasColumns2, isCentered } = props;

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
            {content.map(function mapContent(html) {
                return (
                    <P
                        key={shortid.generate()}
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                );
            })}
        </div>
    );
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
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
 * @type {object}
 */
ModuleTextContent.defaultProps = {
    hasColumns2: false,
    isCentered: false
};
