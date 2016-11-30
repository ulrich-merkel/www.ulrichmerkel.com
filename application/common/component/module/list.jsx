/* eslint-disable react/no-danger */
/**
 * Es6 module for React Component.
 * Component module React classes combine elements to
 * bigger parts of the page.
 *
 * @file
 * @module
 * @flow weak
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.3
 *
 * @requires React
 * @requires classnames
 * @requires component/element/headline
 *
 * @changelog
 * - 0.0.1 basic functions and structure
 *
 * @example <caption>Example usage (jsx)</caption>
 */
import React, { PropTypes } from 'react';
import classnames from 'classnames';

import Headline from './../element/headline';

/**
 * Function representing a component to return a single react child element.
 *
 * This React component is defined as a plain JavaScript function.
 * In an ideal world, most of the components would be stateless functions,
 * because in the future we’ll also be able to make performance optimizations
 * specific to these components by avoiding unnecessary checks and memory allocations.
 * This is the recommended pattern, when possible.
 *
 * @constructor
 * @param {Object} [props] The current component props
 * @returns {React.Element} React component markup
 */
function ModuleList(props) {

    const {
        componentType,
        className,
        itemType,
        content,
        children
    } = props;

    const ComponentType = componentType;
    const componentClassName = classnames(
        'm-list--broadcast',
        className
    );

    return (
        <ComponentType className={componentClassName} itemScope itemType={itemType} role='list'>

            {content.text && content.text.map((entry, index) => {
                return (
                    <li className='m-list__item' key={index}>
                        <Headline className='m-list__alt-headline' isCentered={false} htmlElement='h3'>
                            {entry.headline}
                        </Headline>
                        <ul className='m-list'>
                            {entry.list && entry.list.map((job, key) => {
                                const text = `${job.name}, ${job.job} - ${job.place}`;
                                return (
                                    <li
                                        key={key}
                                        className='m-list__item'
                                        itemProp='itemListElement'
                                        dangerouslySetInnerHTML={{ __html: text }}
                                    />
                                );
                            })}
                        </ul>
                    </li>
                );
            })}
            {children}
        </ComponentType>
    );
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {React.Component.PropTypes}
 * @property {string} [componentType] The component element type used for React.createElement
 * @property {string} [className] The component css class names - will be merged into component default classNames
 * @property {string} [itemType] The schema.org itemtype url attribute
 * @property {Array|string} [children] The component dom node childs - usally an array of components, if there is only a single child it's a string
 * @property {Object} [content] The component translation config
 */
ModuleList.propTypes = {
    componentType: PropTypes.string,
    className: PropTypes.string,
    itemType: PropTypes.string,
    children: PropTypes.node,
    content: PropTypes.object
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {React.Component.DefaultProps}
 */
ModuleList.defaultProps = {
    componentType: 'ul',
    itemType: 'http://schema.org/ItemList',
    content: {}
};

export default ModuleList;
