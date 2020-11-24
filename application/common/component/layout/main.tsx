/**
 * Es6 module for React Component.
 * Layout components merge modules to bigger parts of the
 * overall page layout.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, FunctionComponent, ReactNode } from 'react';

type Props = {
    children?: ReactNode;
};

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @param {Array|string} [props.children] - The component react children
 * @returns {ReactElement} React component markup
 */
export const LayoutMain: FunctionComponent<Props> = (props) => {
    const { children } = props;

    return (
        <main className="l-main" itemProp="mainContentOfPage" role="main">
            {children}
        </main>
    );
}
