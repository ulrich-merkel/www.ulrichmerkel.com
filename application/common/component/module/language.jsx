/* eslint-disable immutable/no-mutation */
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

import { ModuleLanguageItem } from './language/item';

/**
 * Function representing a component to return a single react child element.
 *
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export function ModuleLanguage(props) {
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
    const componentClassName = classnames('m-language', className);
    const componentSchema = itemType ? { itemScope: true, itemType } : null;

    return (
        <ComponentType
            className={componentClassName}
            role="list"
            {...componentSchema}
            {...otherProps}
        >
            {content.list.map((value) => {
                return (
                    <ModuleLanguageItem
                        key={shortid.generate()}
                        headline={value.headline}
                        lead={value.lead}
                        percent={value.percent}
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
 * @type {object}
 * @property {string} [componentType='ul'] - The component element type used for React.createElement
 * @property {string} [className] - The component css class names, will be merged into component default classNames
 * @property {string} [itemType='https://schema.org/ItemList'] - The schema.org itemtype url attribute
 * @property {Array|string} [children] - The component dom node childs, usally an array of components, if there is only a single child it's a string
 * @property {object} [content={}] - The component translation config
 */
ModuleLanguage.propTypes = {
    componentType: PropTypes.string,
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    itemType: PropTypes.string,
    children: PropTypes.node, // eslint-disable-line react/require-default-props
    content: PropTypes.shape({
        list: PropTypes.arrayOf(
            PropTypes.shape({
                headline: PropTypes.string,
                lead: PropTypes.string,
                percent: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.number
                ])
            })
        )
    })
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 * @see ModuleLanguage.propTypes
 */
ModuleLanguage.defaultProps = {
    componentType: 'ul',
    itemType: 'https://schema.org/ItemList',
    content: {}
};
