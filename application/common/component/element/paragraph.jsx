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
import React, { PropTypes } from 'react';
import classnames from 'classnames';

/**
 * Function representing a component to return a single react child element.
 *
 * @constructor
 * @param {Object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
function ElementParagraph(props) {

    const {
        htmlElement,
        className,
        isCentered,
        hasColumns2,
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
 * @property {string} [htmlElement='p'] - The component element type used for React.createElement
 * @property {string} [className] - The component css class names - will be merged into component default classNames
 * @property {boolean} [isCentered=false] - Whether the component should be centered via css or not
 * @property {boolean} [hasColumns2=false] - Whether the component should be rendered in 2 columns via css or not
 */
ElementParagraph.propTypes = {
    htmlElement: PropTypes.string,
    className: PropTypes.string,
    isCentered: PropTypes.bool,
    hasColumns2: PropTypes.bool
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see ElementParagraph.propTypes
 */
ElementParagraph.defaultProps = {
    htmlElement: 'p',
    isCentered: false,
    hasColumns2: false
};

export default ElementParagraph;
