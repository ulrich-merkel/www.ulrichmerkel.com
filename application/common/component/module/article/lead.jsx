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
 * @version 0.0.4
 *
 * @requires react
 * @requires classnames
 * @requires common/component/element/paragraph
 *
 * @changelog
 * - 0.0.4 Restructed module as simple wrapper article (rendering without children behaviour)
 * - 0.0.3 Moved to stateless function
 * - 0.0.2 Rewritten for es2015
 * - 0.0.1 Basic functions and structure
 *
 * @example <caption>Example usage (jsx)</caption>
 */
import React, { PropTypes } from 'react';
import classnames from 'classnames';

import P from './../../element/paragraph';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] - The current component props
 * @returns {React.Element} React component markup
 */
function ModuleArticleLead(props) {

    const {
        text,
        className
    } = props;

    if (!text) {
        return null;
    }

    const composedClassName = classnames(className);

    return (
        <P className={composedClassName} isCentered itemProp='alternativeHeadline'>
            <strong>{text}</strong>
        </P>
    );

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {string} [text=''] - The lead element text
 * @property {string} [className] - The component css class names, will be merged into component default classNames
 */
ModuleArticleLead.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string // eslint-disable-line react/require-default-props
};

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @see ModuleArticleLead.propTypes
 */
ModuleArticleLead.defaultProps = {
    text: ''
};

export default ModuleArticleLead;
