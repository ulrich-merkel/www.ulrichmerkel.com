import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { ModuleArticleButton } from '../button';

describe('ModuleArticleButton', function fnDescribe() {
    const props = {
        btnTo: '/index',
        btnLabel: 'Button label',
        btnTitle: 'Button title',
        className: 'article-button'
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(<ModuleArticleButton {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render btnLabel if btnTitle is empty', function fnIt() {
        const { asFragment } = render(
            <ModuleArticleButton {...props} btnTitle={null} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should return null if content is empty', function fnIt() {
        const { asFragment } = render(
            <ModuleArticleButton {...props} btnTo={null} btnLabel={null} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
