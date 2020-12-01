import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { ListItem } from '../list-item';

describe('ListItem', function fnDescribe() {
    const props = {
        ariaHidden: false,
        className: 'test',
        htmlElement: 'li',
        itemProp: 'itemListElement',
        itemType: 'https://schema.org/EmployeeRole',
        role: 'listitem'
    };
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <ListItem {...props}>Test Child</ListItem>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly with defaults', function fnIt() {
        const { asFragment } = render(<ListItem>Test Child</ListItem>);
        expect(asFragment()).toMatchSnapshot();
    });
});
