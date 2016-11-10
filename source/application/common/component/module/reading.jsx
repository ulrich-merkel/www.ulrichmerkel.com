/**
 * Es6 module for React Component.
 * Component module React classes combine elements to
 * bigger parts of the page.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.4
 *
 * @requires React
 * @requires classnames
 * @requires component/element/h5
 * @requires component/element/paragraph
 *
 * @changelog
 * - 0.0.4 excluded headline/lead into separate component
 * - 0.0.3 moved to stateless function
 * - 0.0.2 rewritten for es2015
 * - 0.0.1 basic functions and structure
 *
 * @example <caption>Example usage (jsx)</caption>
 * import Reading from './reading';
 */
import React, { PropTypes } from 'react';
import classnames from 'classnames';

import ComponentModuleReadingItem from './reading/item';

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
function ComponentModuleReading(props) {

    const {
        componentType,
        className,
        itemType,
        content,
        children,
        ...otherProps
    } = props;

    if (!content.list || !content.list.length) {
        return null;
    }

    const ComponentType = componentType;
    const componentClassName = classnames(
        {
            'm-list--reading': true
        },
        'm-reading',
        className
    );
    let componentSchema = {};

    if (itemType) {
        componentSchema = {
            itemScope: true,
            itemType
        };
    }

    return (
        <ComponentType
            className={componentClassName}
            role='list'
            {...componentSchema}
            {...otherProps}
        >
            {content.list.map((value, index) => {
                return (
                    <ComponentModuleReadingItem
                        key={index}
                        headline={value.headline}
                        lead={value.lead}
                        creator={value.creator}
                        publisher={value.publisher}
                    />
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
* @property {Object} [i18n] The component translation config
* @property {Array.<Object>} [i18n.list] Translation input with component list entries
*/
ComponentModuleReading.propTypes = {
    componentType: PropTypes.string,
    className: PropTypes.string,
    itemType: PropTypes.string,
    children: PropTypes.node,
    content: PropTypes.shape({
        list: PropTypes.arrayOf(
            PropTypes.shape({
                headline: PropTypes.string,
                lead: PropTypes.string,
                creator: PropTypes.string,
                publisher: PropTypes.string
            })
        )
    })
};

/**
* Set defaults if props aren't available.
*
* @static
* @type {React.Component.DefaultProps}
* @property {string} componentType='ul' The component element type used for React.createElement
* @property {string} itemType='https://schema.org/ItemList' The schema.org itemtype url attribute
* @property {Object} i18n The component translation config
*/
ComponentModuleReading.defaultProps = {
    componentType: 'ul',
    itemType: 'https://schema.org/ItemList',
    content: {}
};

export default ComponentModuleReading;
