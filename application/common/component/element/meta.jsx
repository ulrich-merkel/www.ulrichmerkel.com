/**
 * Es6 module for React Component.
 * Component element React classes are small parts of the page,
 * like buttons and headlines. They often correspond to native
 * html elements and are wrapped for easier maintaning.
 *
 * @file
 * @module
 * @flow weak
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @requires react
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import React, { PropTypes } from 'react';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] - The current component props
 * @returns {ReactElement|null} React component markup
 */
function ElementMeta(props) {

    const {
        itemProp,
        name,
        property,
        content,
        ...otherProps
    } = props;

    if (!content) {
        return null;
    }
    return (
        <meta {...{ itemProp, name, property, content }} {...otherProps} />
    );

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {string} [itemProp] - The meta tag itemProp attribute
 * @property {string} [name] - The meta tag name attribute
 * @property {string} [property] - The meta tag property attribute
 * @property {string} [content=''] - The meta tag content attribute
 */
ElementMeta.propTypes = {
    itemProp: PropTypes.string, // eslint-disable-line react/require-default-props
    name: PropTypes.string, // eslint-disable-line react/require-default-props
    property: PropTypes.string, // eslint-disable-line react/require-default-props
    content: PropTypes.string
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see ElementMeta.propTypes
 */
ElementMeta.defaultProps = {
    content: ''
};

export default ElementMeta;
