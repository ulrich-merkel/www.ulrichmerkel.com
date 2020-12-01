import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { View } from '../view';

describe('View', function fnDescribe() {
    const props = {
        className: 'test',
        itemProp: 'test',
        itemType: 'https://schema.org/ItemList',
        role: 'banner'
    };
    it('should render correctly', function fnIt() {
        const { asFragment } = render(<View {...props}>Test Child</View>);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly with defaults', function fnIt() {
        const { asFragment } = render(<View>Test Child</View>);
        expect(asFragment()).toMatchSnapshot();
    });
});
