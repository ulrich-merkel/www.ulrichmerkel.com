/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ElementA from './../a';

describe('common/component/element/a', function () {
    const defaultProps = {
        to: 'testpage',
        className: 'link-a',
        title: 'Link title',
        lang: 'de'
    };

    it('should render correctly', function () {
        const tree = renderer.create(
            <ElementA {...defaultProps}>
                Link Children
            </ElementA>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should handle correct link to relative page', function () {
        const tree = renderer.create(
            <ElementA {...defaultProps} to='/persona'>
                Link Children
            </ElementA>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should handle correct link to index page', function () {
        const tree = renderer.create(
            <ElementA {...defaultProps} to='/index' isIndex>
                Link Children
            </ElementA>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
