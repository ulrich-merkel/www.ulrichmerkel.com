/**
 * Rendering a meta html tag.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, FunctionComponent } from 'react';

type Props = {
    content?: string;
    itemProp?: string;
    name?: string;
    property?: string;
};

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @param {string} [props.content=''] - The meta tag content attribute
 * @param {string} [props.itemProp] - The meta tag itemProp attribute
 * @param {string} [props.name] - The meta tag name attribute
 * @param {string} [props.property] - The meta tag property attribute
 * @returns {ReactElement|null} React component markup
 */
export const Meta: FunctionComponent<Props> = (props) => {
    const { content = '', itemProp, name, property, ...otherProps } = props;

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
};
