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
 * @requires common/component/element/headline
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Headline from '../../element/headline';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
function ModuleArticleHeadline(props) {

    const {
        text,
        isMain,
        className
    } = props;

    if (!text) {
        return null;
    }

    const composedClassName = classnames(className);
    const htmlElement = isMain ? 'h1' : 'h2';

    return (
        <Headline className={composedClassName} itemProp='headline' htmlElement={htmlElement}>
            {text}
        </Headline>
    );

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {string} [text=''] - The headline text
 * @property {boolean} [isMain=false] - Whether this is a main headline (h1) or not
 * @property {string} [className] - The component css class names, will be merged into component default classNames
 */
ModuleArticleHeadline.propTypes = {
    text: PropTypes.string,
    isMain: PropTypes.bool,
    className: PropTypes.string // eslint-disable-line react/require-default-props
};

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @see ModuleArticleHeadline.propTypes
 */
ModuleArticleHeadline.defaultProps = {
    text: '',
    isMain: false
};

export default ModuleArticleHeadline;
