import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { Article } from '../article';

describe('Article', function fnDescribe() {
    const props = {
        className: 'test',
        htmlElement: 'div',
        itemProp: 'itemProp',
        itemType: 'itemType'
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <Article {...props}>Small Children</Article>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly with defaults', function fnIt() {
        const { asFragment } = render(<Article>Small Children</Article>);
        expect(asFragment()).toMatchSnapshot();
    });
});
