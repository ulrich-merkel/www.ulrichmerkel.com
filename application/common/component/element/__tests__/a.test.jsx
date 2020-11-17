import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { A } from '../a';

describe('A', function fnDescribe() {
    const defaultProps = {
        to: 'testpage',
        className: 'link-a',
        title: 'Link title',
        lang: 'de'
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(<A {...defaultProps}>Link Children</A>);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should handle correct link to relative page', function fnIt() {
        const { asFragment } = render(
            <A {...defaultProps} to="/persona">
                Link Children
            </A>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should handle correct link to external page 1', function fnIt() {
        const { asFragment } = render(
            <A {...defaultProps} to="http://www.foo.bar">
                Link Children
            </A>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should handle correct link to external page 2', function fnIt() {
        const { asFragment } = render(
            <A {...defaultProps} to="http://foo.bar">
                Link Children
            </A>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should handle correct link to external page 3', function fnIt() {
        const { asFragment } = render(
            <A {...defaultProps} to="www.foo.bar">
                Link Children
            </A>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
