import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { LayoutLoader, LayoutLoaderConnected } from '../loader';

describe('LayoutLoader', function fnDescribe() {
    const defaultProps = {
        content: {
            headline: 'Headline',
            lead: 'Lorem ipsum'
        }
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <LayoutLoader {...defaultProps}>Loader Children</LayoutLoader>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly the connected version', function fnIt() {
        const { asFragment } = render(
            <LayoutLoaderConnected {...defaultProps}>
                Loader Children
            </LayoutLoaderConnected>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
