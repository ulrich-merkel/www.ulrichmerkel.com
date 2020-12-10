/**
 * Es6 module as error boundary for the react application.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, Component, ReactNode, ErrorInfo } from 'react';
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
    static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    /**
     * Simlpy logging the error.
     *
     * @param {object} error - The error that was thrown
     * @param {object} errorInfo - An object with a componentStack key containing information about which component threw the error
     * @returns {void}
     */
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        logger.warn(error, errorInfo);
    }

    /**
     * @returns {ReactElement} The current children
     */
    render(): ReactNode {
        const { hasError } = this.state;
        if (hasError) {
            return <h1>Something went wrong.</h1>;
        }

        const { children } = this.props;
        return children;
    }
}
