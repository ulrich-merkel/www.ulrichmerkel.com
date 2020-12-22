import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { ModuleFeaturedItem } from '../item';

describe('ModuleFeaturedItem', function fnDescribe() {
    const props = {
        path: '/like-architecture',
        headline: 'Featured item work headline',
        img: {}
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <ModuleFeaturedItem {...props}>
                Module featured item children
            </ModuleFeaturedItem>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly with defaults', function fnIt() {
        const { asFragment } = render(
            <ModuleFeaturedItem>
                Module featured item children
            </ModuleFeaturedItem>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render null without valid path', function fnIt() {
        const { asFragment } = render(
            <ModuleFeaturedItem path="">
                Module featured item children
            </ModuleFeaturedItem>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
