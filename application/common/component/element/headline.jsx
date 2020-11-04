/* eslint-disable immutable/no-mutation */
/**
 * Rendering a html headline tag, like h1, h2, h3...
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
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Function representing a component to return a single react child element.
 *
 * @param {object} [props] - The current component props
 * @property {string} [props.className] - The component css class names, will be merged into component default classNames
 * @property {string} [props.htmlElement='h1'] - The component element type used for React.createElement
 * @property {boolean} [props.isCentered=true] - Whether the component should be centered via css or not
 * @returns {ReactElement} React component markup
 */
function ElementHeadline(props) {
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
        // eslint-disable-next-line react/jsx-props-no-spreading
        <HtmlElement className={componentClassName} {...otherProps} />
    );
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
 */
ElementHeadline.propTypes = {
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    htmlElement: PropTypes.oneOf([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6'
    ]),
    isCentered: PropTypes.bool
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 */
ElementHeadline.defaultProps = {
    htmlElement: 'h1',
    isCentered: true
};

export default ElementHeadline;
