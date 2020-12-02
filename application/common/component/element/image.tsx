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
    alt?: string;
    className?: string;
    src: string;
};

/**
 * Function representing a html image element.
 *
 * @function
 * @param {object} props - The current component props
 * @param {string} props.src - The current image location
 * @param {string} [props.alt=''] - The image alt attribute
 * @param {string} [props.className] - The component css class names, will be merged into component default classNames
 * @returns {ReactElement} React component markup
 */
export const Image: FunctionComponent<Props> = (props) => {
    const { alt = '', className, src } = props;

    const componentClassName = classnames('c-img', className);

    return <img alt={alt} className={componentClassName} src={src} />;
};
