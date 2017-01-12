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
 * @requires common/component/element/button
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
import Button from './../../element/button';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
function ModuleArticleButton(props) {

    const {
        btnTo,
        btnLabel,
        btnTitle,
        className
    } = props;

    if (!btnTo || !btnLabel) {
        return null;
    }

    const composedClassName = classnames(className, 'hide-on-print');

    return (
        <P className={composedClassName} isCentered>
            <Button title={btnTitle || btnLabel} to={btnTo}>
                {btnLabel}
            </Button>
        </P>
    );

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {string} [btnTo=''] - The button link target
 * @property {string} [btnLabel=''] - The button label
 * @property {string} [btnTitle=''] - The button title
 * @property {string} [className] - The component css class names, will be merged into component default classNames
 */
ModuleArticleButton.propTypes = {
    btnTo: PropTypes.string,
    btnLabel: PropTypes.string,
    btnTitle: PropTypes.string,
    className: PropTypes.string // eslint-disable-line react/require-default-props
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see ModuleArticleButton.propTypes
 */
ModuleArticleButton.defaultProps = {
    btnTo: '',
    btnLabel: '',
    btnTitle: ''
};

export default ModuleArticleButton;
