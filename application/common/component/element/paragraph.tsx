/**
 * Rendering a p html tag.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 *
 * @example <caption>Example usage (jsx)</caption>
 * import P from './paragraph';
 *
 * <P className='additional-css' itemProp='text'>
 *     Paragraph text content lorem ipsum dolor
 * </P>
 *
 * // <p class="c-type--p additional-css" itemprop="text">
 * // Paragraph text content lorem ipsum dolor
 * // </p>
 */
import { default as React, FunctionComponent, ReactNode } from 'react';
import classnames from 'classnames';

type Props = {
    children?: ReactNode;
    className?: string;
    hasColumns2?: boolean;
    htmlElement?: keyof JSX.IntrinsicElements;
    isCentered?: boolean;
    itemProp?: string;
    dangerouslySetInnerHTML?: { __html: string; }
};

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @param {string} [props.className] - The component css class names - will be merged into component default classNames
 * @param {boolean} [props.hasColumns2=false] - Whether the component should be rendered in 2 columns via css or not
 * @param {string} [props.htmlElement='p'] - The component element type used for React.createElement
 * @param {boolean} [props.isCentered=false] - Whether the component should be centered via css or not
 * @returns {ReactElement} React component markup
 */
export const P: FunctionComponent<Props> = (props) => {
    const {
        className,
        hasColumns2 = false,
        htmlElement: HtmlElement = 'p',
        isCentered = false,
        ...otherProps
    } = props;

    const componentClassName = classnames(
        {
            'is-centered': isCentered,
            'has-columns--2': hasColumns2
        },
        'c-type--p',
        className
    );

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <HtmlElement className={componentClassName} {...otherProps} />
    );
}
