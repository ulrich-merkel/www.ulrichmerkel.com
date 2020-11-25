import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { ModuleFeatured } from '../featured';

describe('ModuleFeatured', function fnDescribe() {
    const props = {
        htmlElement: 'span',
        className: 'foo',
        content: {
            list: [
                {
                    path: 'path/',
                    headline: 'headline',
                    lead: 'lead',
                    img: {}
                }
            ]
        }
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <ModuleFeatured {...props}>Module Featured Children</ModuleFeatured>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should return null if no content is empty', function fnIt() {
        const { asFragment } = render(
            <ModuleFeatured
                {...props}
                content={{
                    list: null
                }}
            >
                Module featured children not rendered
            </ModuleFeatured>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render no itemType if unset', function fnIt() {
        const { asFragment } = render(
            <ModuleFeatured {...props} itemType={null}>
                Module featured children
            </ModuleFeatured>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
