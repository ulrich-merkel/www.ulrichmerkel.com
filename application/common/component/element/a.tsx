/**
 * Rendering a html a tag or react-router component.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 *
 * @example <caption>Example usage (jsx)</caption>
 * import { A } from './a';
 *
 * <A to='/page' className='additional-css' itemProp='url'>
 *     Link text
 * </A>
 *
 * // <a class="c-link additional-css" tabindex="0" itemprop="url" href="/page">
 * //  Link text
 * // </a>
 */
import { default as React, FunctionComponent, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { isEmpty, noop } from 'lodash';
import { isValidString } from '../../utils/string';

type Props = {
    activeClassName?: string;
    children?: ReactNode;
    className?: string;
    exact?: boolean;
    htmlElement?: keyof JSX.IntrinsicElements;
    itemProp?: string;
    itemScope?: boolean;
    itemType?: string;
    onClick?: (event: React.MouseEvent) => void;
    role?: string;
    strict?: boolean;
    tabIndex?: number;
    title?: string;
    to: string;
};

type GetAttributesParams = {
    activeClassName?: string;
    exact?: boolean;
    strict?: boolean;
    to?: string;
};

/**
 * Check if rendered element should be a default a element.
 *
 * @private
 * @param {string} [to] - The link target/react-router path
 * @returns {boolean} Whether this is a default a element
 */
export function isLink(to?: string): boolean {
    if (!isValidString(to)) {
        return false;
    }
    return to.includes('www.') || to.includes('http');
}

/**
 * Check if rendered element should be a react-router link.
 *
 * @private
 * @param {string} [to] - The link target/react-router path
 * @returns {boolean} Whether this is a react-router element
 */
export function isNavLink(to?: string): boolean {
    if (!isValidString(to)) {
        return false;
    }
    return to.startsWith('/');
}

/**
 * Get correct attributes for link target/react-router.
 *
 * @private
 * @param {object} params - Some component properties
 * @returns {object} Attributes depending on link type
 */
export function getAttributes(
    params?: GetAttributesParams
): Record<string, string | boolean> {
    if (isEmpty(params)) {
        return {};
    }

    const { activeClassName, exact, strict, to } = params;

    if (isLink(to)) {
        return {
            href: to,
            rel: 'noopener noreferrer',
            target: '_blank'
        };
    }

    if (isNavLink(to)) {
        return {
            activeClassName,
            exact,
            strict,
            to
        };
    }

    return {};
}

/**
 * Function representing a html link component.
 *
 * @function
 * @param {object} props - The current component props
 * @param {string} props.to - The link target/react-router path
 * @param {string} [props.activeClassName='is-active'] - The default is active state css class name
 * @param {Array|string} [props.children] - The component dom node childs - usally an array of components, if there is only a single child it's a string
 * @param {string} [props.className] - The component css class names - will be merged into component default classNames
 * @param {string} [props.htmlElement='a'] - The component element type used for React.createElement
 * @param {string} [props.title=''] - The title string to be set on a tag
 * @param {boolean} [props.exact] - Exclusively passed to NavLink
 * @returns {ReactElement} React component markup
 */
export const A: FunctionComponent<Props> = (props) => {
    const {
        activeClassName = 'is-active',
        children,
        className,
        exact,
        htmlElement = 'a',
        itemProp,
        itemScope,
        itemType,
        onClick = noop,
        role,
        strict,
        tabIndex = 0,
        title = '',
        to,
        ...otherProps
    } = props;

    if (!isValidString(to)) {
        return null;
    }

    const componentClassName = classnames('c-link', className);
    const HtmlElement = isNavLink(to) ? NavLink : htmlElement;
    const attributes = getAttributes({
        activeClassName,
        exact,
        strict,
        to
    });

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <HtmlElement
            {...attributes}
            className={componentClassName}
            {...{
                itemProp,
                itemScope,
                itemType,
                onClick,
                role,
                tabIndex,
                title
            }}
            {...otherProps}
        >
            {children}
        </HtmlElement>
    );
};
