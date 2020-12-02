/**
 * Rendering a small html tag.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, FunctionComponent, ReactNode } from 'react';
import classnames from 'classnames';

type Props = {
    children?: ReactNode;
    className?: string;
    htmlElement?: keyof JSX.IntrinsicElements;
    itemProp?: string;
};

/**
 * Function representing a html small element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @param {string} [props.className=''] - The component css class names, will be merged into component default classNames
 * @param {string} [props.htmlElement='small'] - The component element type used for React.createElement
 * @returns {ReactElement} React component markup
 */
export const Small: FunctionComponent<Props> = (props) => {
    const {
        children,
        className,
        htmlElement: HtmlElement = 'small',
        itemProp
    } = props;

    const composedClassName = classnames('c-type--small', className);

    return (
        <HtmlElement className={composedClassName} {...{ itemProp }}>
            {children}
        </HtmlElement>
    );
};
