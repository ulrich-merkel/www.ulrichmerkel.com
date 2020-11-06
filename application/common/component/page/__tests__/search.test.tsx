/* eslint-disable func-names */
import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { PageSearch } from '../search';

describe('PageSearch', function () {
    const props = {
        content: {
            head: {},
            section1: {},
            formSearch: {}
        }
    };

    it('should render correctly', function () {
        const { asFragment } = render(
            <PageSearch {...props}>Page search children</PageSearch>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly as dialog', function () {
        const { asFragment } = render(
            <PageSearch {...props} isDialog>
                Page search children as dialog
            </PageSearch>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
