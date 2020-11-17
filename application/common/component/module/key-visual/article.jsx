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

import { Headline } from '../../element/headline';
import { P } from '../../element/paragraph';

/**
 * Function representing a component to return a single react child element.
 *
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export function ModuleKeyVisualArticle(props) {
    const { headline, lead } = props;

    if (!headline || !lead) {
        return null;
    }

    const componentArticleClassName = classnames('m-key-visual__text');

    return (
        <article className={componentArticleClassName}>
            <Headline
                className="m-key-visual__headline"
                itemProp="headline"
                htmlElement="h3"
            >
                <span className="m-key-visual__boxed">{headline}</span>
            </Headline>
            <P className="m-key-visual__lead" itemProp="description">
                <span className="m-key-visual__boxed">{lead}</span>
            </P>
        </article>
    );
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
 * @property {string} [headline=''] - The article headline content
 * @property {string} [lead=''] - The article lead content
 */
ModuleKeyVisualArticle.propTypes = {
    headline: PropTypes.string,
    lead: PropTypes.string
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 * @see ModuleKeyVisualArticle.propTypes
 */
ModuleKeyVisualArticle.defaultProps = {
    headline: '',
    lead: ''
};
