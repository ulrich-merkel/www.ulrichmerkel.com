import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { ModuleArticleHeadline } from '../headline';

describe(' ModuleArticleHeadline', function fnDescribe() {
    const props = {
        text: 'Module article headline text',
        className: 'article-headline'
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(<ModuleArticleHeadline {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render h1 htmlElement if isMain is set', function fnIt() {
        const { asFragment } = render(
            <ModuleArticleHeadline {...props} isMain />
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should return null if text is empty', function fnIt() {
        const { asFragment } = render(
            <ModuleArticleHeadline {...props} text={null} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
