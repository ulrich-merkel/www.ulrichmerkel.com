/**
 * Es6 module for React Component.
 * Component element React classes are small parts of the page,
 * like buttons and headlines. They often correspond to native
 * html elements and are wrapped for easier maintaning.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @requires React
 * @requires classnames
 *
 * @changelog
 * - 0.0.1 basic functions and structure
 *
 * @example <caption>Example usage (jsx)</caption>
 * import Headline from './headline';
 *
 * <Headline className='additional-css' itemProp='headline'>
 *     My Headline Text
 * </Headline>
 *
 * // <h1 class="c-type--h1 is-centered additional-css" itemprop="headline">
 * // My Headline Text
 * // </h1>
 */
import React, { PropTypes } from 'react';
import classnames from 'classnames';

/**
 * Function representing a component to return a single react child element.
 *
 * @constructor
 * @param {Object} [props] The current component props
 * @returns {ReactElement} React component markup
 */
const ElementHeadline = (props) => {

    const {
        htmlElement: HtmlElement,
        className,
        isCentered,
        ...otherProps
    } = props;

    const componentClassName = classnames(
        {
            'is-centered': isCentered
        },
        `c-type--${HtmlElement}`,
        className
    );

    return (
        <HtmlElement className={componentClassName} {...otherProps} />
    );

};

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {string} [htmlElement='h1'] The component element type used for React.createElement
 * @property {string} [className] The component css class names - will be merged into component default classNames
 * @property {boolean} [isCentered=true] Whether the component should be centered via css or not
 */
ElementHeadline.propTypes = {
    htmlElement: PropTypes.oneOf([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6'
    ]),
    className: PropTypes.string,
    isCentered: PropTypes.bool
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see ElementHeadline.propTypes
 */
ElementHeadline.defaultProps = {
    htmlElement: 'h1',
    isCentered: true
};

export default ElementHeadline;