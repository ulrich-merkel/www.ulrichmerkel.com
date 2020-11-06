import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { PageBroadcast } from '../broadcast';

describe('PageBroadcast', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <PageBroadcast>Page broadcast children</PageBroadcast>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly as dialog', function fnIt() {
        const props = {
            content: {
                head: {},
                section1: {},
                formSearch: {}
            }
        };
        const { asFragment } = render(
            <PageBroadcast {...props} isDialog>
                Page broadcast children as dialog
            </PageBroadcast>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
