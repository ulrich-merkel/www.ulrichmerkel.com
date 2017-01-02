/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ElementMeta from './../meta';

describe('common/component/element/meta', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <ElementMeta itemProp='foo' name='name' property='foo' content='bar'>
                Meta Children rendered
            </ElementMeta>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render nothing if no content is set', function () {
        const tree = renderer.create(
            <ElementMeta itemProp='foo' name='name' property='foo'>
                Meta Children not rendered
            </ElementMeta>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
