/* eslint-disable immutable/no-mutation */
/**
 * Rendering a progress html tag with fallback.
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
 */
import React from 'react';
import { string } from 'prop-types';
import classnames from 'classnames';

/**
 * Function representing a component to return a single react child element.
 *
 * @param {Object} [props] - The current component props
 * @param {string} [props.className] - The component css class names, will be merged into component default classNames
 * @param {string} [props.fallbackClassName] - The falllback element css class names
 * @param {string} [props.htmlElement='progress'] - The component element type used for React.createElement
 * @param {string} [props.id='m-progress'] - Used as unique identifier for getElementById
 * @param {string} [props.max='100'] - Max value for the progress bar
 * @param {string} [props.value='0'] - Max value for the progress bar
 * @returns {ReactElement} React component markup
 */
function ElementProgress(props) {
    const {
        className,
        fallbackClassName,
        htmlElement,
        id,
        max,
        value,
        ...otherProps
    } = props;

    const ComponentType = htmlElement;
    const composedClassName = classnames(
        'm-progress',
        className
    );
    const composedFallbackClassName = classnames(
        'm-progress__fallback',
        fallbackClassName
    );

    return (
        <ComponentType
            className={composedClassName}
            {...{ id, max, value }}
            {...otherProps}
        >
            <span className={composedFallbackClassName} id={`${id}__fallback`} />
        </ComponentType>
    );
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 */
ElementProgress.propTypes = {
    className: string,
    fallbackClassName: string,
    htmlElement: string,
    id: string,
    max: string,
    value: string
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 */
ElementProgress.defaultProps = {
    className: '',
    fallbackClassName: '',
    htmlElement: 'progress',
    id: 'm-progress',
    max: '100',
    value: '0'
};

export default ElementProgress;
