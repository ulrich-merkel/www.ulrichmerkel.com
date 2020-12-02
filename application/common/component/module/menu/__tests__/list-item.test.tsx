import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { ModuleMenuListItem } from '../list-item';

describe('ModuleMenuListItem', function fnDescribe() {
    const props = {
        className: 'test',
        itemProp: 'itemListElement',
        itemType: 'http://www.schema.org/SiteNavigationElement'
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <ModuleMenuListItem {...props}>List item</ModuleMenuListItem>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly with defaults', function fnIt() {
        const { asFragment } = render(
            <ModuleMenuListItem>List item</ModuleMenuListItem>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
