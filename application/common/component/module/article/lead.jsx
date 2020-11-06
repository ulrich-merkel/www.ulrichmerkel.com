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

import { P } from '../../element/paragraph';

/**
 * Function representing a component to return a single react child element.
 *
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export function ModuleArticleLead(props) {
    const { text, className } = props;

    if (!text) {
        return null;
    }

    const composedClassName = classnames(className);

    return (
        <P
            className={composedClassName}
            isCentered
            itemProp="alternativeHeadline"
        >
            <strong>{text}</strong>
        </P>
    );
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
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
 * @type {object}
 * @see ModuleArticleLead.propTypes
 */
ModuleArticleLead.defaultProps = {
    text: ''
};
