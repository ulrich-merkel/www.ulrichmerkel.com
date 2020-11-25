/**
 * Rendering a progress html tag with fallback.
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
    fallbackClassName?: string;
    htmlElement?: keyof JSX.IntrinsicElements;
    id?: string;
    max?: string;
    value?: string;
};

/**
 * Function representing a html progress element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @param {string} [props.className] - The component css class names, will be merged into component default classNames
 * @param {string} [props.fallbackClassName] - The falllback element css class names
 * @param {string} [props.htmlElement='progress'] - The component element type used for React.createElement
 * @param {string} [props.id='m-progress'] - Used as unique identifier for getElementById
 * @param {string} [props.max='100'] - Max value for the progress bar
 * @param {string} [props.value='0'] - Max value for the progress bar
 * @returns {ReactElement} React component markup
 */
export const Progress: FunctionComponent<Props> = (props) => {
    const {
        className,
        fallbackClassName,
        htmlElement: HtmlElement = 'progress',
        id = 'm-progress',
        max = '100',
        value = '',
        ...otherProps
    } = props;

    const composedClassName = classnames('m-progress', className);
    const composedFallbackClassName = classnames(
        'm-progress__fallback',
        fallbackClassName
    );

    return (
        <HtmlElement
            className={composedClassName}
            {...{ id, max, value }}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        >
            <span
                className={composedFallbackClassName}
                id={`${id}__fallback`}
            />
        </HtmlElement>
    );
};
