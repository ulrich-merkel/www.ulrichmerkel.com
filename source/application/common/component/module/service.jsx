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
 * import Service from './service';

 */
import React, { PropTypes } from 'react';
import classnames from 'classnames';

import ComponentModuleServiceItem from './service/item';

/**
 * Helper function to insert clear items in array to ease css timeline
 * view floating.
 *
 * @function
 * @private
 * @param {Array} input The source array
 * @returns {Array} The converted list
 */
function insertClearedListItems(input) {
    let array = Array.from(input); // eslint-disable-line prefer-const
    const length = array.length;

    if (array && length) {

        const lengthAfterInsert = length * 1.5;

        if (length >= 2) {
            for (let i = 2; i < lengthAfterInsert; i = i + 3) {
                array.splice(i, 0, {
                    isClear: true
                });
            }
        }

    }

    return array;
}

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
function ComponentModuleService(props) {

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
        'm-service',
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
            {insertClearedListItems(content.list).map((value, index) => {
                return (
                    <ComponentModuleServiceItem
                        key={index}
                        headline={value.headline}
                        text={value.text}
                        isClear={value.isClear}
                        index={index}
                        icon={value.icon}
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
ComponentModuleService.propTypes = {
    componentType: PropTypes.string,
    className: PropTypes.string,
    itemType: PropTypes.string,
    children: PropTypes.node,
    content: PropTypes.shape({
        list: PropTypes.arrayOf(
            PropTypes.shape({
                iconClassName: PropTypes.string,
                headline: PropTypes.string,
                text: PropTypes.string
            })
        )
    })
};

/**
* Set defaults if props aren't available.
*
* @static
* @type {React.Component.DefaultProps}
* @property {string} componentType='article' The component element type used for React.createElement
* @property {string} itemType='https://schema.org/ItemList' The schema.org itemtype url attribute
* @property {Object} i18n The component translation config
*/
ComponentModuleService.defaultProps = {
    componentType: 'ul',
    itemType: 'https://schema.org/ItemList',
    content: {}
};

export default ComponentModuleService;
