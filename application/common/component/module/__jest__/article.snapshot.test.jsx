/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ModuleArticle from './../article';

describe('common/component/module/article', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <ModuleArticle
                componentType='span'
                className='module-article'
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
                Module Article Children
            </ModuleArticle>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
