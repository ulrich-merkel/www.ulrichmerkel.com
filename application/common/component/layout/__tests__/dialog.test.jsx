import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { LayoutDialog, LayoutDialogConnected } from '../dialog';

describe('LayoutDialog', function fnDescribe() {
    const defaultProps = {
        dialogVisible: true,
        page: 'foo',
        dialogPage: 'foo',
        content: {}
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <LayoutDialog {...defaultProps}>Dialog Children</LayoutDialog>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly the connected version', function fnIt() {
        const { asFragment } = render(
            <LayoutDialogConnected {...defaultProps}>
                Dialog Children
            </LayoutDialogConnected>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render null if not visible', function fnIt() {
        const { asFragment } = render(
            <LayoutDialog {...defaultProps} dialogVisible={false}>
                Dialog Children
            </LayoutDialog>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});