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

import { Button } from '../../element/button';
import { P } from '../../element/paragraph';

/**
 * Function representing a component to return a single react child element.
 *
 * @param {object} [props] - The current component props
 * @param {string} [props.btnLabel=''] - The button label
 * @param {string} [props.btnTitle=''] - The button title
 * @param {string} [props.btnTo=''] - The button link target
 * @param {string} [props.className] - The component css class names, will be merged into component default classNames
 * @param {boolean} [props.isDialog=false] - Flag if this is rendering within a dialog
 * @returns {ReactElement} React component markup
 */
export function ModuleArticleButton(props) {
    const { btnLabel, btnTitle, btnTo, className, isDialog } = props;

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
 * @type {object}
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
 * @type {object}
 */
ModuleArticleButton.defaultProps = {
    btnLabel: '',
    btnTitle: '',
    btnTo: '',
    isDialog: false
};
