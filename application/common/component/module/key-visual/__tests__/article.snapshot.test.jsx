/* eslint-disable import/no-extraneous-dependencies, func-names */
import * as React from 'react';
import renderer from 'react-test-renderer';
import ModuleKeyVisualArticle from '../article';

describe('common/component/module/key-visual/article', function () {
    it('should render correctly', function () {
        const tree = renderer
            .create(<ModuleKeyVisualArticle headline="headline" lead="lead" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render null if no content is provided', function () {
        const tree = renderer.create(<ModuleKeyVisualArticle />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
