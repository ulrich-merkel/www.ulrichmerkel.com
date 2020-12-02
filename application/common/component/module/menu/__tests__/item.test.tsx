import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { ModuleMenuItem } from '../item';

describe('ModuleMenuItem', function fnDescribe() {
    const props = {
        icon: 'foo',
        itemProp: 'bar',
        itemType: 'itemType',
        label: 'Menu item label',
        path: 'path',
        title: 'Menu item title'
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <ModuleMenuItem {...props}>
                Module menu item children
            </ModuleMenuItem>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly with defaults', function fnIt() {
        const { asFragment } = render(
            <ModuleMenuItem>Module menu item children</ModuleMenuItem>
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
