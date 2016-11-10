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
 * @requires react
 * @requires classnames
 * @requires component/element/image
 *
 * @changelog
 * - 0.0.4 excluded headline/lead into separate component
 * - 0.0.3 moved to stateless function
 * - 0.0.2 rewritten for es2015
 * - 0.0.1 basic functions and structure
 */
import React, { PropTypes } from 'react';
import classnames from 'classnames';

import ModuleFeaturedItem from './featured/item';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] The current component props
 * @returns {ReactElement} React component markup
 */
function ModuleFeatured(props) {

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
        'm-featured',
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
                    <ModuleFeaturedItem
                        key={index}
                        path={value.path}
                        headline={value.headline}
                        lead={value.lead}
                        img={value.img}
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
 * @property {string} [componentType='ul'] The component element type used for React.createElement
 * @property {string} [className] The component css class names - will be merged into component default classNames
 * @property {string} [itemType='https://schema.org/ItemList'] The schema.org itemtype url attribute
 * @property {Array|string} [children] The component dom node childs - usally an array of components, if there is only a single child it's a string
 * @property {Object} [content={}] The component translation config
 */
ModuleFeatured.propTypes = {
    componentType: PropTypes.string,
    className: PropTypes.string,
    itemType: PropTypes.string,
    children: PropTypes.node,
    content: PropTypes.shape({
        list: PropTypes.arrayOf(
            PropTypes.shape({
                path: PropTypes.string,
                headline: PropTypes.string,
                lead: PropTypes.string,
                img: PropTypes.object
            })
        )
    })
};

/**
* Set defaults if props aren't available.
*
* @static ModuleFeatured.propTypes
* @type {Object}
* @see
*/
ModuleFeatured.defaultProps = {
    componentType: 'ul',
    itemType: 'https://schema.org/ItemList',
    content: {}
};

export default ModuleFeatured;
