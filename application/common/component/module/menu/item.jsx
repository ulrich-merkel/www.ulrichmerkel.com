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
 * @version 0.0.1
 *
 * @requires react
 * @requires classnames
 * @requires common/component/element/a
 * @requires common/component/element/a
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import React, { PropTypes } from 'react';
import classnames from 'classnames';

import A from './../../element/a';
import Icon from './../../element/icon';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] - The current component props
 * @returns {React.Element} React component markup
 */
function ModuleMenuItem(props) {

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
                <Icon className='m-menu__icon' icon={icon} />
                <span className={labelClassName} itemProp='name'>
                    {label}
                </span>
            </A>
            {children}
        </li>
    );

}

/**
 * Valiate props via React.PropTypes helpers.

 * @static
 * @type {Object}
 * @property {string} [path=''] - The react-router link
 * @property {string} [title=''] - The items title content
 * @property {string} [label=''] - The items label content
 * @property {Array|string} [children] - The component dom node childs, usally an array of components, if there is only a single child it's a string
 * @property {string} [itemType='http://www.schema.org/SiteNavigationElement'] - The schema.org itemtype url attribute
 * @property {string} [icon=''] - The icon type
 * @property {boolean} [isLabelHidden=false] - Whether the label is hidden or not
 * @property {string} [itemPropA='url'] - The link element itemProp attribute
 */
ModuleMenuItem.propTypes = {
    path: PropTypes.string,
    title: PropTypes.string,
    label: PropTypes.string,
    children: PropTypes.node, // eslint-disable-line react/require-default-props
    itemType: PropTypes.string,
    icon: PropTypes.string,
    isLabelHidden: PropTypes.bool,
    itemPropA: PropTypes.string
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see ModuleMenuItem.propTypes
 */
ModuleMenuItem.defaultProps = {
    path: '',
    title: '',
    label: '',
    itemType: 'http://www.schema.org/SiteNavigationElement',
    icon: '',
    isLabelHidden: false,
    itemPropA: 'url'
};

export default ModuleMenuItem;
