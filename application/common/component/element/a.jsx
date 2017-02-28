/* eslint-disable immutable/no-let, immutable/no-mutation */
/**
 * Es6 module for React Component.
 * Component element React classes are small parts of the page,
 * like buttons and headlines. They often correspond to native
 * html elements and are wrapped for easier maintaning.
 *
 * @file
 * @module
 * @flow weak
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.3
 *
 * @requires react
 * @requires react-router
 * @requires classnames
 *
 * @changelog
 * - 0.0.3 Moved to stateless function
 * - 0.0.2 Moved code to es6
 * - 0.0.1 Basic functions and structure
 *
 * @example <caption>Example usage (jsx)</caption>
 * import A from './a';
 *
 * <A to='/page' className='additional-css' itemProp='url'>
 *     Link text
 * </A>
 *
 * // <a class="c-link additional-css" tabindex="0" itemprop="url" href="/page">
 * //  Link text
 * // </a>
 */
import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import classnames from 'classnames';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] - The current component props
 * @returns {React.Element} React component markup
 */
function ElementA(props) {

    const {
        componentType,
        className,
        activeClassName,
        isMenu,
        isIndex,
        isTargetSelf,
        to,
        children,
        title,
        ...otherProps
    } = props;

    if (!to) {
        return null;
    }

    const ancorAttributes = Object.assign(
        {
            href: to
        },
        !isTargetSelf && {
            rel: 'noopener noreferrer',
            target: '_blank'
        }
    );

    const componentAttributes = {
        to,
        activeClassName
    };

    const componentClassName = classnames(
        {
            'm-menu__item': isMenu
        },
        'c-link',
        className
    );

    let ComponentType = componentType,
        attributes = ancorAttributes;

    if (to.charAt(0) === '/') {
        ComponentType = Link;
        attributes = componentAttributes;
    }
    if (isIndex || to === '/') {
        ComponentType = IndexLink;
        attributes = componentAttributes;
    }

    return (
        <ComponentType {...attributes} className={componentClassName} tabIndex='0' title={title} {...otherProps}>
            {children}
        </ComponentType>
    );

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {string} to - The link target/react-router path
 * @property {string} [componentType='a'] - The component element type used for React.createElement
 * @property {string} [className] - The component css class names - will be merged into component default classNames
 * @property {string} [activeClassName='is-active'] - The default is active state css class name
 * @property {string} [title=''] - The title string to be set on a tag
 * @property {boolean} [isIndex=false] - Whether the component is link to home/index or not
 * @property {boolean} [isMenu=false] - Whether the component is displayed in a menu or not
 * @property {boolean} [isTargetSelf=false] - Whether to set rel and target blank attributes or not
 * @property {Array|string} [children] - The component dom node childs - usally an array of components, if there is only a single child it's a string
 */
ElementA.propTypes = {
    to: PropTypes.string.isRequired,
    componentType: PropTypes.string,
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    activeClassName: PropTypes.string,
    title: PropTypes.string,
    isIndex: PropTypes.bool,
    isMenu: PropTypes.bool,
    isTargetSelf: PropTypes.bool,
    children: PropTypes.node // eslint-disable-line react/require-default-props
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see ElementA.propTypes
 */
ElementA.defaultProps = {
    componentType: 'a',
    activeClassName: 'is-active',
    title: '',
    isIndex: false,
    isMenu: false,
    isTargetSelf: false
};

export default ElementA;
