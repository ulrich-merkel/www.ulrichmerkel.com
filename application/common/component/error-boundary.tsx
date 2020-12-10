/**
 * Es6 module as error boundary for the react application.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, Component, ReactNode } from 'react';
import { logger } from '../utils/logger';

type Props = {
    children: ReactNode;
};

type State = {
    hasError: boolean;
};

/**
 * Handling errors in the react render tree.
 *
 * @see {@link https://reactjs.org/docs/error-boundaries.html}
 *
 * @function
 * @param {object} props - The current component props
 * @param {Array|string|ReactElement} props.children - All react children to be rendered
 * @returns {ReactElement} React component children
 */
export class ErrorBoundary extends Component<Props, State> {
    state = {
        hasError: false
    };

    // Update state so the next render will show the fallback UI.
    static getDerivedStateFromError() {
        return { hasError: true };
    }

    // Simlpy logging the error
    componentDidCatch(error, errorInfo) {
        logger.warn(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Render a custom ui hint
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}
