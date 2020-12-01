import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { List } from '../list';

describe('ListItem', function fnDescribe() {
    const props = {
        className: 'test',
        htmlElement: 'ol',
        itemProp: 'menu',
        itemType: 'https://schema.org/ItemList',
        role: 'menu'
    };
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <List {...props}>
                <li>Test Child</li>
            </List>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly with defaults', function fnIt() {
        const { asFragment } = render(
            <List>
                <li>Test Child</li>
            </List>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
