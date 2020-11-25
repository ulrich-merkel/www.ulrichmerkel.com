/**
 * Rendering a single html img tag.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, FunctionComponent } from 'react';
import classnames from 'classnames';

type Props = {
    src: string;
    alt?: string;
    className?: string;
};

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} props - The current component props
 * @param {string} props.src - The current image location
 * @param {string} [props.alt=''] - The image alt attribute
 * @param {string} [props.className] - The component css class names, will be merged into component default classNames
 * @returns {ReactElement} React component markup
 */
export const Image: FunctionComponent<Props> = (props) => {
    const { className, alt = '', src, ...otherProps } = props;

    const componentClassName = classnames('c-img', className);

    return (
        <img
            alt={alt}
            className={componentClassName}
            src={src}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        />
    );
};