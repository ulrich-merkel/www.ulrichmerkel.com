import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { Abbr } from '../abbr';

describe('Abbr', function fnDescribe() {
    const props = {
        className: 'test',
        htmlElement: 'abbr',
        itemProp: 'itemProp',
        title: 'title'
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(<Abbr {...props}>Test Child</Abbr>);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly with defaults', function fnIt() {
        const { asFragment } = render(<Abbr>Test Child</Abbr>);
        expect(asFragment()).toMatchSnapshot();
    });
});
