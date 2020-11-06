/* eslint-disable immutable/no-mutation, immutable/no-let */
/**
 * Es6 module for React Component.
 * Component module React classes combine elements to
 * bigger parts of the page.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import shortid from 'shortid';

import ModuleServiceItem from './service/item';

/**
 * Helper function to insert clear items in array to ease css timeline
 * view floating.
 *
 * @private
 * @param {Array} input - The source array
 * @returns {Array} The converted list
 */
export function insertClearedListItems(input) {
    let array = Array.from(input); // eslint-disable-line prefer-const
    const { length } = array;

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
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export function ModuleService(props) {
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
    const componentClassName = classnames('m-service', className);
    const componentSchema = itemType ? { itemScope: true, itemType } : null;

    return (
        <ComponentType
            className={componentClassName}
            role="list"
            {...componentSchema}
            {...otherProps}
        >
            {insertClearedListItems(content.list).map((value, index) => {
                return (
                    <ModuleServiceItem
                        key={shortid.generate()}
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
 * @property {string} [componentType='ul'] - The component element type used for React.createElement
 * @property {string} [className] - The component css class names, will be merged into component default classNames
 * @property {string} [itemType='https://schema.org/ItemList'] - The schema.org itemtype url attribute
 * @property {Array|string} [children] - The component dom node childs, usally an array of components, if there is only a single child it's a string
 * @property {object} [content={}] - The component translation config
 */
ModuleService.propTypes = {
    componentType: PropTypes.string,
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    itemType: PropTypes.string,
    children: PropTypes.node, // eslint-disable-line react/require-default-props
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
 * @type {object}
 * @see ModuleService.propTypes
 */
ModuleService.defaultProps = {
    componentType: 'ul',
    itemType: 'https://schema.org/ItemList',
    content: {}
};
