/**
 * Es6 module for React Component.
 * Component module React classes combine elements to
 * bigger parts of the page.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.4
 *
 * @requires React
 * @requires classnames
 * @requires component/element/h1
 * @requires component/element/h3
 * @requires component/element/paragraph
 * @requires component/element/button
 *
 * @changelog
 * - 0.0.4 restructed module as simple wrapper article (rendering without children behaviour)
 * - 0.0.3 moved to stateless function
 * - 0.0.2 rewritten for es2015
 * - 0.0.1 basic functions and structure
 *
 * @example <caption>Example usage (jsx)</caption>
 */
import React, { PropTypes } from 'react';
import classnames from 'classnames';

import P from './../../element/paragraph';

/**
 * Function representing a component to return a single react child element.
 *
 * This React component is defined as a plain JavaScript function.
 * In an ideal world, most of the components would be stateless functions,
 * because in the future we’ll also be able to make performance optimizations
 * specific to these components by avoiding unnecessary checks and memory allocations.
 * This is the recommended pattern, when possible.
 *
 * @constructor
 * @param {Object} [props] The current component props
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
 * @type {React.Component.PropTypes}
 */
ModuleArticleLead.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string
};

export default ModuleArticleLead;
