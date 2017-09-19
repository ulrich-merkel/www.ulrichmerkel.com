/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ModuleArticleLead from '../lead';

describe('common/component/module/article/lead', function () {
    const defaultProps = {
        text: 'Module article lead text',
        className: 'article-lead'
    };

    it('should render correctly', function () {
        const tree = renderer.create(
            <ModuleArticleLead
                {...defaultProps}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should return null if text is empty', function () {
        const tree = renderer.create(
            <ModuleArticleLead
                {...defaultProps}
                text={null}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
