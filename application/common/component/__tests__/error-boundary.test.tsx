import * as React from 'react';
import { render } from '../../../__tests__/utils/test-utils';
import { ErrorBoundary } from '../error-boundary';

function ProblemChild() {
    throw new Error('Error thrown from problem child');
    return <div>Error</div>; // eslint-disable-line
}

describe('ErrorBoundary', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <ErrorBoundary>
                <div className="test-child" />
            </ErrorBoundary>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should handle errors', function fnIt() {
        const { asFragment } = render(
            <ErrorBoundary>
                <ProblemChild />
            </ErrorBoundary>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
