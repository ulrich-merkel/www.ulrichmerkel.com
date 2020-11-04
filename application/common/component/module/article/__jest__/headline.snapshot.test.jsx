/* eslint-disable import/no-extraneous-dependencies, func-names */
import * as React from 'react';
import renderer from 'react-test-renderer';
import ModuleArticleHeadline from '../headline';

describe('common/component/module/article/button', function () {
    const defaultProps = {
        text: 'Module article headline text',
        className: 'article-headline'
    };

    it('should render correctly', function () {
        const tree = renderer.create(
            <ModuleArticleHeadline
                {...defaultProps}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render h1 htmlElement if isMain is set', function () {
        const tree = renderer.create(
            <ModuleArticleHeadline
                {...defaultProps}
                isMain
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should return null if text is empty', function () {
        const tree = renderer.create(
            <ModuleArticleHeadline
                {...defaultProps}
                text={null}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
