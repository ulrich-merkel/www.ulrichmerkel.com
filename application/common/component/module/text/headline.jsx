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

import { Headline } from '../../element/headline';

/**
 * Function representing a component to return a single react child element.
 *
 * @param {object} [props] - The current component props
 * @param {string} [props.text=''] - The headline text
 * @returns {ReactElement} React component markup
 */
export function ModuleTextHeadline(props) {
    const { text } = props;

    if (!text) {
        return null;
    }

    return (
        <Headline className="m-text__headline" htmlElement="h3">
            {text}
        </Headline>
    );
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
 */
ModuleTextHeadline.propTypes = {
    text: PropTypes.string
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 */
ModuleTextHeadline.defaultProps = {
    text: ''
};
