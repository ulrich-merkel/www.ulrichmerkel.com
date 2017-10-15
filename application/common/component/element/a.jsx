/* eslint-disable immutable/no-let, immutable/no-mutation */
/**
 * Rendering a html a tag or react-router component.
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
 * @requires react-router-dom
 * @requires classnames
 *
 * @changelog
 * - 0.0.4 Switching to react-router@4
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
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} props - The current component props
 * @param {string} props.to - The link target/react-router path
 * @param {string} [props.activeClassName='is-active'] - The default is active state css class name
 * @param {Array|string} [props.children] - The component dom node childs - usally an array of components, if there is only a single child it's a string
 * @param {string} [props.className] - The component css class names - will be merged into component default classNames
 * @param {string} [props.componentType='a'] - The component element type used for React.createElement
 * @param {string} [props.title=''] - The title string to be set on a tag
 * @param {boolean} [props.exact] - Exclusively passed to NavLink
 * @returns {ReactElement} React component markup
 */
function A(props) {
    const {
        activeClassName,
        children,
        className,
        componentType,
        exact,
        strict,
        title,
        to,
        ...otherProps
    } = props;

    const ancorAttributes = {
        href: to
    };
    const componentAttributes = {
        activeClassName,
        exact,
        strict,
        to
    };
    const componentClassName = classnames(
        'c-link',
        className
    );

    let ComponentType = componentType,
        attributes = ancorAttributes;

    if (to.includes('www.') || to.includes('http')) {
        attributes = Object.assign(attributes, {
            rel: 'noopener noreferrer',
            target: '_blank'
        });
    }

    if (to.charAt(0) === '/') {
        ComponentType = NavLink;
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
 */
A.propTypes = {
    to: PropTypes.string.isRequired,
    activeClassName: PropTypes.string,
    children: PropTypes.node, // eslint-disable-line react/require-default-props
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    componentType: PropTypes.string,
    exact: PropTypes.bool, // eslint-disable-line react/require-default-props
    strict: PropTypes.bool, // eslint-disable-line react/require-default-props
    title: PropTypes.string
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 */
A.defaultProps = {
    activeClassName: 'is-active',
    componentType: 'a',
    title: ''
};

export default A;
