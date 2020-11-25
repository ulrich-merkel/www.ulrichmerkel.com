import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { ModuleArticle } from '../article';

describe('ModuleArticle', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <ModuleArticle
                htmlElement="span"
                className="module-article"
                isMain
                noMargin
                isSpaced
                content={{
                    headline: 'Headline Article',
                    lead: 'Lead Article',
                    datePublished: '20161212',
                    author: 'Author'
                }}
            >
                Module article children
            </ModuleArticle>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
