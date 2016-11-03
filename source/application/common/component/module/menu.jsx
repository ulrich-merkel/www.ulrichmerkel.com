/**
 * Es6 module for React Component.
 * Component module React classes combine elements to
 * bigger parts of the page.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @requires react
 * @requires classnames
 * @requires component/element/a
 * @requires component/element/a
 *
 * @changelog
 * - 0.0.1 basic functions and structure
 */
import React, { PropTypes, Children } from 'react';
import classnames from 'classnames';

import A from './../element/a';
import Icon from './../element/icon';

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
 * @private
 * @param {Object} [props] The current component props
 * @returns {React.Element} React component markup
 */
const ComponentModuleMenuItem = (props) => {

    const {
        path,
        title,
        label,
        children,
        itemType,
        icon,
        isLabelHidden,
        itemPropA,
        ...otherProps
    } = props;

    if (!path) {
        return null;
    }

    const componentListItemClassName = classnames('m-menu__list-item');
    const labelClassName = classnames(
        {
            'is-visually-hidden': isLabelHidden
        },
        'm-menu__label'
    );

    return (
        <li className={componentListItemClassName} itemProp='itemListElement' itemScope itemType={itemType} {...otherProps}>
            <A itemProp={itemPropA} to={path} title={title} isMenu role='menuitem'>
                {icon && <Icon className='m-menu__icon' icon={icon} />}
                <span className={labelClassName} itemProp='name'>
                    {label}
                </span>
            </A>
            {children}
        </li>
    );

};

/**
 * Valiate props via React.PropTypes helpers.

 * @static
 * @type {React.Component.PropTypes}
 * @property {object} propTypes
 * @property {string} [path] The react-router link
 * @property {string} [title] The items title content
 * @property {string} [label] The items label content
 * @property {Array|string} [children] The component dom node childs - usally an array of components, if there is only a single child it's a string
 */
ComponentModuleMenuItem.propTypes = {
    path: PropTypes.string,
    title: PropTypes.string,
    label: PropTypes.string,
    children: PropTypes.node,
    itemType: PropTypes.string,
    icon: PropTypes.string,
    isLabelHidden: PropTypes.bool,
    itemPropA: PropTypes.string
};

ComponentModuleMenuItem.defaultProps = {
    itemType: 'http://www.schema.org/SiteNavigationElement',
    isLabelHidden: false,
    itemPropA: 'url'
};

/**
 * Function representing a component to return a single react child element.
 *
 * This React classes component is defined as a plain JavaScript function.
 * In an ideal world, most of your components would be stateless functions
 * because in the future we’ll also be able to make performance optimizations
 * specific to these components by avoiding unnecessary checks and memory allocations.
 * This is the recommended pattern, when possible.
 *
 * @function
 * @param {object} props The current component props
 * @returns {React.Element} React component markup
 */
const ComponentModuleMenu = (props) => {

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
        'm-menu',
        content.name ? `m-menu--${content.name}` : '',
        className
    );
    let componentSchema = {};

    if (itemType) {
        componentSchema = {
            itemScope: true,
            itemType: itemType
        };
    }

    return (
        <ComponentType
            className={componentClassName}
            role='menu'
            {...componentSchema}
            {...otherProps}
        >
            {content.list && content.list.map((value, index) => {
                return (
                    <ComponentModuleMenuItem
                        key={index}
                        path={value.path}
                        title={value.title}
                        label={value.label}
                        itemType={value.itemType}
                        icon={value.icon}
                        isLabelHidden={value.isLabelHidden}
                        itemPropA={value.itemPropA}
                    >
                        {value.metaLinkUrl && <link itemProp='url' href={value.metaLinkUrl} />}
                    </ComponentModuleMenuItem>
                );
            })}
            {children && Children.map((child) => {
                return React.cloneElement(child, {
                });
            })}
        </ComponentType>
    );

};

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
 * @property {Array.<Object>} [i18n.list] Translation input
 */
ComponentModuleMenu.propTypes = {
    componentType: PropTypes.string,
    className: PropTypes.string,
    itemType: PropTypes.string,
    children: PropTypes.node,
    content: PropTypes.shape({
        name: PropTypes.string,
        list: PropTypes.arrayOf(
            PropTypes.shape({
                url: PropTypes.string,
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
* @static
* @type {React.Component.DefaultProps}
* @property {string} componentType='article' The component element type used for React.createElement
* @property {string} itemType='https://schema.org/ItemList' The schema.org itemtype url attribute
* @property {Object} i18n The component translation config
*/
ComponentModuleMenu.defaultProps = {
    componentType: 'ul',
    itemType: 'https://schema.org/ItemList',
    content: {}
};

export default ComponentModuleMenu;
