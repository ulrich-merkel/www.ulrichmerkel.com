/**
 * Es6 module for React Component.
 * Component grid React classes are small helpers for
 * easy maintaning the responsive css grid layout.
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
};

/**
 * Function representing a component to return a single react child element.
 *
 * @param {object} [props] - The current component props
 * @param {string} [props.className] - The addition css classNames
 * @param {string} [props.htmlElement='section'] - The component element type used for React.createElement
 * @returns {ReactElement} React component markup
 */
export const GridContainer: FunctionComponent<Props> = (props) => {
    const { children, className, htmlElement = 'section' } = props;

    const ComponentType = htmlElement;
    const componentClassName = classnames('l-grid', className);

    return (
        <ComponentType className={componentClassName}>{children}</ComponentType>
    );
};
