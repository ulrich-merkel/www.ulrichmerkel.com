import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { ModuleMenuItem } from '../item';

describe('ModuleMenuItem', function fnDescribe() {
    const props = {
        path: 'path',
        title: 'Menu item title',
        label: 'Menu item label',
        itemType: 'itemType',
        icon: 'foo',
        itemPropA: 'bar'
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <ModuleMenuItem {...props}>
                Module menu item children
            </ModuleMenuItem>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('should return null if no path is given', function fnIt() {
        const { asFragment } = render(
            <ModuleMenuItem {...props} path={null}>
                Module menu item children not rendered
            </ModuleMenuItem>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should hide label if isLabelHidden is present', function fnIt() {
        const { asFragment } = render(
            <ModuleMenuItem {...props} isLabelHidden>
                Module menu item children
            </ModuleMenuItem>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
