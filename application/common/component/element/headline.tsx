/**
 * Rendering a html headline tag, like h1, h2, h3...
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 *
 * @example <caption>Example usage (jsx)</caption>
 * import { Headline } from './headline';
 *
 * <Headline className='additional-css' itemProp='headline'>
 *     My Headline Text
 * </Headline>
 *
 * // <h1 class="c-type--h1 is-centered additional-css" itemprop="headline">
 * // My Headline Text
 * // </h1>
 */
import { default as React, FunctionComponent, ReactNode } from 'react';
import classnames from 'classnames';

type Props = {
    children?: ReactNode;
    className?: string;
    htmlElement?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    itemProp?: string;
    isCentered?: boolean;
};

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @property {string} [props.className] - The component css class names, will be merged into component default classNames
 * @property {string} [props.htmlElement='h1'] - The component element type used for React.createElement
 * @property {boolean} [props.isCentered=true] - Whether the component should be centered via css or not
 * @returns {ReactElement} React component markup
 */
export const Headline: FunctionComponent<Props> = (props) => {
    const {
        htmlElement: HtmlElement = 'h1',
        className,
        isCentered = true,
        ...otherProps
    } = props;

    const componentClassName = classnames(
        {
            'is-centered': isCentered
        },
        `c-type--${HtmlElement}`,
        className
    );

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <HtmlElement className={componentClassName} {...otherProps} />
    );
};