/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import { stub } from 'sinon';
import ElementA from './../a';

describe('common/component/element/a', function () {
    const defaultProps = {
        to: 'testpage',
        className: 'link-a',
        title: 'Link title',
        lang: 'de'
    };

    /**
     * Since react will console.error propType warnings, that which we'd rather have
     * as errors, we use sinon.js to stub it into throwing these warning as errors
     * instead with `throw new Error(warning)` or simply ignore it (While not
     * forgetting to restore it afterwards).
     *
     * @see {@link https://gist.github.com/scmx/d98cc058a7c3dfef7890}
     */
    beforeAll(function () {
        stub(console, 'error').callsFake(() => {})
    });
    afterAll(function () {
        console.error.restore(); // eslint-disable-line no-console
    });

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
    it('should return null of there is no to attribute', function () {
        const tree = renderer.create(
            <ElementA {...defaultProps} to={null}>
                Link Children
            </ElementA>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
