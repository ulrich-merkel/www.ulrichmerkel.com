/* eslint-disable immutable/no-mutation */
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
 * @requires prop-types
 * @requires classnames
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 *
 * @example <caption>Example usage (jsx)</caption>
 * import P from './paragraph';
 *
 * <P className='additional-css' itemProp='text'>
 *     Paragraph text content lorem ipsum dolor
 * </P>
 *
 * // <p class="c-type--p additional-css" itemprop="text">
 * // Paragraph text content lorem ipsum dolor
 * // </p>
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] - The current component props
 * @param {string} [props.className] - The component css class names - will be merged into component default classNames
 * @param {boolean} [props.hasColumns2=false] - Whether the component should be rendered in 2 columns via css or not
 * @param {string} [props.htmlElement='p'] - The component element type used for React.createElement
 * @param {boolean} [props.isCentered=false] - Whether the component should be centered via css or not
 * @returns {React.Element} React component markup
 */
function ElementParagraph(props) {
    const {
        className,
        hasColumns2,
        htmlElement,
        isCentered,
        ...otherProps
    } = props;

    const ComponentType = htmlElement;
    const componentClassName = classnames(
        {
            'is-centered': isCentered,
            'has-columns--2': hasColumns2
        },
        'c-type--p',
        className
    );

    return (
        <ComponentType className={componentClassName} {...otherProps} />
    );
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 */
ElementParagraph.propTypes = {
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    hasColumns2: PropTypes.bool,
    htmlElement: PropTypes.string,
    isCentered: PropTypes.bool
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 */
ElementParagraph.defaultProps = {
    hasColumns2: false,
    htmlElement: 'p',
    isCentered: false
};

export default ElementParagraph;
