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
import { noop } from 'lodash';

type Props = {
    activeClassName?: string;
    children?: ReactNode;
    className?: string;
    exact?: boolean;
    htmlElement?: keyof JSX.IntrinsicElements;
    itemProp?: string;
    itemScope?: boolean;
    itemType?: string;
    onClick?: () => void;
    role?: string;
    strict?: boolean;
    tabIndex?: number;
    title?: string;
    to: string;
};

/**
 * Function representing a component to return a single react child element.
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

    const ancorAttributes = {
        href: to
    };
    const componentAttributes = {
        activeClassName,
        exact,
        strict,
        to
    };
    const componentClassName = classnames('c-link', className);

    let HtmlElement = htmlElement,
        attributes = ancorAttributes;

    if (to.includes('www.') || to.includes('http')) {
        attributes = Object.assign(attributes, {
            rel: 'noopener noreferrer',
            target: '_blank'
        });
    }

    if (to.charAt(0) === '/') {
        HtmlElement = NavLink;
        attributes = componentAttributes;
    }

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
