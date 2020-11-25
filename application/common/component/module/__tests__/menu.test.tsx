import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { ModuleMenu } from '../menu';

describe('ModuleMenu', function fnDescribe() {
    const props = {
        htmlElement: 'ol',
        className: 'module-menu',
        content: {
            name: 'bar',
            list: [
                {
                    path: '/foo',
                    title: 'title',
                    label: 'label',
                    itemType: 'foo',
                    icon: 'icon',
                    itemPropA: 'bar',
                    metaLinkUrl: '/test'
                },
                {
                    path: '/foo',
                    title: 'title',
                    isLabelHidden: true
                },
                {
                    path: '/foo',
                    title: 'title'
                }
            ]
        }
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <ModuleMenu {...props}>Module menu children</ModuleMenu>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should return null if content image is empty', function fnIt() {
        const { asFragment } = render(
            <ModuleMenu
                {...props}
                content={{
                    list: null
                }}
            >
                Module menu children not rendered
            </ModuleMenu>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render no itemType if unset', function fnIt() {
        const { asFragment } = render(
            <ModuleMenu {...props} itemType={null}>
                Module menu children
            </ModuleMenu>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
