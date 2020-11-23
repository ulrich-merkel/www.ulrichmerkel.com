/**
 * Es6 module as the root component for the react application.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, FunctionComponent, ReactNode } from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';

type RootProps = {
    children: ReactNode,
    store: Store
};

/**
 * Function representing the react redux root.
 *
 * @function
 * @param {object} props - The current component props
 * @param {Array|string|ReactElement} props.children - Required due to Provider
 * @param {object} props.store - Complete redux store state
 * @returns {ReactElement} React component markup
 */
export const Root: FunctionComponent<RootProps> = (props) => {
    const { children, store } = props;

    return <Provider {...{ store }}>{children}</Provider>;
}
