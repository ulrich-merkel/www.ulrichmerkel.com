/* eslint-disable immutable/no-mutation */
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
 * @version 0.0.4
 *
 * @requires react
 * @requires prop-types
 * @requires classnames
 * @requires shortid
 * @requires common/component/module/reading/item
 *
 * @changelog
 * - 0.0.4 Excluded headline/lead into separate component
 * - 0.0.3 Moved to stateless function
 * - 0.0.2 Rewritten for es2015
 * - 0.0.1 Basic functions and structure
 *
 * @example <caption>Example usage (jsx)</caption>
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import shortid from 'shortid';

import ModuleReadingItem from './reading/item';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] - The current component props
 * @returns {React.Element} React component markup
 */
function ModuleReading(props) {

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
        'm-list--reading',
        'm-reading',
        className
    );
    const componentSchema = itemType ? { itemScope: true, itemType } : null;

    return (
        <ComponentType
            className={componentClassName}
            role='list'
            {...componentSchema}
            {...otherProps}
        >
            {content.list.map((value) => {
                return (
                    <ModuleReadingItem
                        key={shortid.generate()}
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
* @type {Object}
* @property {string} [componentType='ul'] - The component element type used for React.createElement
* @property {string} [className] - The component css class names, will be merged into component default classNames
* @property {string} [itemType='https://schema.org/ItemList'] - The schema.org itemtype url attribute
* @property {Array|string} [children] - The component dom node childs, usally an array of components, if there is only a single child it's a string
* @property {Object} [content={}] - The component translation config
*/
ModuleReading.propTypes = {
    componentType: PropTypes.string,
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    itemType: PropTypes.string,
    children: PropTypes.node, // eslint-disable-line react/require-default-props
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
 * @type {Object}
 * @see ModuleReading.propTypes
 */
ModuleReading.defaultProps = {
    componentType: 'ul',
    itemType: 'https://schema.org/ItemList',
    content: {}
};

export default ModuleReading;
