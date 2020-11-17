/* eslint-disable immutable/no-mutation */
/**
 * Rendering a meta html tag.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import * as React from 'react';
import PropTypes from 'prop-types';

/**
 * Function representing a component to return a single react child element.
 *
 * @param {object} [props] - The current component props
 * @param {string} [props.content=''] - The meta tag content attribute
 * @param {string} [props.itemProp] - The meta tag itemProp attribute
 * @param {string} [props.name] - The meta tag name attribute
 * @param {string} [props.property] - The meta tag property attribute
 * @returns {ReactElement|null} React component markup
 */
export function Meta(props) {
    const { content, itemProp, name, property, ...otherProps } = props;

    if (!content) {
        return null;
    }

    return (
        <meta
            {...{
                itemProp,
                name,
                property,
                content
            }}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        />
    );
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
 */
Meta.propTypes = {
    content: PropTypes.string,
    itemProp: PropTypes.string, // eslint-disable-line react/require-default-props
    name: PropTypes.string, // eslint-disable-line react/require-default-props
    property: PropTypes.string // eslint-disable-line react/require-default-props
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 */
Meta.defaultProps = {
    content: ''
};
