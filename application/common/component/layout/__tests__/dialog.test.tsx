import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { LayoutDialog, LayoutDialogConnected } from '../dialog';

describe('LayoutDialog', function fnDescribe() {
    const props = {
        changeDialogVisible: jest.fn(),
        className: 'test',
        dialogPage: 'foo',
        dialogVisible: true,
        content: {},
        page: 'foo'
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <LayoutDialog {...props}>Dialog Children</LayoutDialog>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly the connected version', function fnIt() {
        const { asFragment } = render(
            <LayoutDialogConnected {...props}>
                Dialog Children
            </LayoutDialogConnected>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render null if not visible', function fnIt() {
        const { asFragment } = render(
            <LayoutDialog {...props} dialogVisible={false}>
                Dialog Children
            </LayoutDialog>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
