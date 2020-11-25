import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { PageSearch } from '../search';

describe('PageSearch', function fnDescribe() {
    const props = {
        content: {
            head: {},
            section1: {},
            formSearch: {}
        }
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <PageSearch {...props}>Page search children</PageSearch>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly as dialog', function fnIt() {
        const { asFragment } = render(
            <PageSearch {...props} isDialog>
                Page search children as dialog
            </PageSearch>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
