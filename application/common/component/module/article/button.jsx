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
 * @version 0.0.4
 *
 * @requires react
 * @requires prop-types
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
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {
    Button,
    P
} from '../../element';

/**
 * Function representing a component to return a single react child element.
 *
 * @param {Object} [props] - The current component props
 * @param {string} [props.btnLabel=''] - The button label
 * @param {string} [props.btnTitle=''] - The button title
 * @param {string} [props.btnTo=''] - The button link target
 * @param {string} [props.className] - The component css class names, will be merged into component default classNames
 * @param {boolean} [props.isDialog=false] - Flag if this is rendering within a dialog
 * @returns {ReactElement} React component markup
 */
function ModuleArticleButton(props) {
    const {
        btnLabel,
        btnTitle,
        btnTo,
        className,
        isDialog
    } = props;

    if (!btnTo || !btnLabel || isDialog) {
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
 */
ModuleArticleButton.propTypes = {
    btnLabel: PropTypes.string,
    btnTitle: PropTypes.string,
    btnTo: PropTypes.string,
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    isDialog: PropTypes.bool
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 */
ModuleArticleButton.defaultProps = {
    btnLabel: '',
    btnTitle: '',
    btnTo: '',
    isDialog: false
};

export default ModuleArticleButton;
