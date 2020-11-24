/**
 * Rendering a html tag to display font-icons.
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
    htmlElement?: string;
    icon?: string;
};

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @param {string} [props.className] - The component css class names - will be merged into component default classNames
 * @param {string} [props.htmlElement='i'] - The component element type used for React.createElement
 * @param {string} [props.icon=''] - The icon name taken for the web font
 * @returns {ReactElement|null} React component markup
 */
export const Icon: FunctionComponent<Props> = (props) => {
    const { htmlElement: HtmlElement = 'i', className, icon = '', ...otherProps } = props;

    if (!icon) {
        return null;
    }

    const componentClassName = classnames(`c-font-icon--${icon}`, className);

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <HtmlElement
            className={componentClassName}
            aria-hidden="true"
            {...otherProps}
        />
    );
}
