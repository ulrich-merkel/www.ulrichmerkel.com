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
 * @requires common/component/element/a
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import React, { PropTypes } from 'react';
import classnames from 'classnames';

import A from './../../element/a';

/**
 * Function representing a component to return a single react child element.
 *
 * @constructor
 * @param {Object} [props] - The current component props
 * @returns {ReactElement|null} React component markup
 */
function ModuleTextLink(props) {

    const {
        content
    } = props;

    if (!content) {
        return null;
    }

    const {
        linkTo,
        linkLabel,
        linkTitle
    } = content;

    if (!linkTo || !linkLabel) {
        return null;
    }

    const componentTextContentClassName = classnames(
        'm-text__link',
        'is-centered'
    );

    return (
        <div className={componentTextContentClassName}>
            <A to={linkTo} title={linkTitle}>
                <i aria-hidden='true' className='c-font-icon--earth' />
                {linkLabel}
            </A>
        </div>
    );

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {string} [content] - The link content's text
 */
ModuleTextLink.propTypes = {
    content: PropTypes.shape({
        linkTo: PropTypes.string,
        linkLabel: PropTypes.string,
        linkTitle: PropTypes.string
    })
};

export default ModuleTextLink;
