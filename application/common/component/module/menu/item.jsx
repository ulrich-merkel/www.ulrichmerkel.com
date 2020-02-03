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
 * @version 0.0.1
 *
 * @requires react
 * @requires prop-types
 * @requires classnames
 * @requires common/component/element/a
 * @requires common/component/element/a
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {
    A,
    Icon
} from '../../element';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @param {Array|string} [props.children] - The component dom node childs, usally an array of components, if there is only a single child it's a string
 * @param {string} [props.icon=''] - The icon type
 * @param {boolean} [props.isLabelHidden=false] - Whether the label is hidden or not
 * @param {string} [props.itemPropA='url'] - The link element itemProp attribute
 * @param {string} [props.itemType='http://www.schema.org/SiteNavigationElement'] - The schema.org itemtype url attribute
 * @param {string} [props.label=''] - The items label content
 * @param {string} [props.path=''] - The react-router link
 * @param {string} [props.title=''] - The items title content
 * @returns {ReactElement} React component markup
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
            <A itemProp={itemPropA} to={path} title={title} className='m-menu__item' role='menuitem' exact>
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
 * @type {object}
 */
ModuleMenuItem.propTypes = {
    children: PropTypes.node, // eslint-disable-line react/require-default-props
    icon: PropTypes.string,
    isLabelHidden: PropTypes.bool,
    itemPropA: PropTypes.string,
    itemType: PropTypes.string,
    label: PropTypes.string,
    path: PropTypes.string,
    title: PropTypes.string
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 */
ModuleMenuItem.defaultProps = {
    icon: '',
    isLabelHidden: false,
    itemPropA: 'url',
    itemType: 'http://www.schema.org/SiteNavigationElement',
    label: '',
    path: '',
    title: ''
};

export default ModuleMenuItem;
