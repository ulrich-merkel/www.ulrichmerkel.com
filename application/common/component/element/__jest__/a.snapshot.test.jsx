/* eslint-disable react/jsx-props-no-spreading, import/no-extraneous-dependencies, func-names */
import * as React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import ElementA from '../a';

describe('common/component/element/a', function () {
    const defaultProps = {
        to: 'testpage',
        className: 'link-a',
        title: 'Link title',
        lang: 'de'
    };

    it('should render correctly', function () {
        const tree = renderer
            .create(
                <MemoryRouter>
                    <ElementA {...defaultProps}>Link Children</ElementA>
                </MemoryRouter>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should handle correct link to relative page', function () {
        const tree = renderer
            .create(
                <MemoryRouter>
                    <ElementA {...defaultProps} to="/persona">
                        Link Children
                    </ElementA>
                </MemoryRouter>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should handle correct link to external page', function () {
        const tree1 = renderer
            .create(
                <MemoryRouter>
                    <ElementA {...defaultProps} to="http://www.foo.bar">
                        Link Children
                    </ElementA>
                </MemoryRouter>
            )
            .toJSON();
        expect(tree1).toMatchSnapshot();
        const tree2 = renderer
            .create(
                <MemoryRouter>
                    <ElementA {...defaultProps} to="http://foo.bar">
                        Link Children
                    </ElementA>
                </MemoryRouter>
            )
            .toJSON();
        expect(tree2).toMatchSnapshot();
        const tree3 = renderer
            .create(
                <MemoryRouter>
                    <ElementA {...defaultProps} to="www.foo.bar">
                        Link Children
                    </ElementA>
                </MemoryRouter>
            )
            .toJSON();
        expect(tree3).toMatchSnapshot();
    });
});
