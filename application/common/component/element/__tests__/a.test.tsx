import * as React from 'react';
import {
    render,
    screen,
    userEvent
} from '../../../../__tests__/utils/test-utils';
import { A, isLink, isNavLink, getAttributes } from '../a';

describe('A', function fnDescribe() {
    const props = {
        to: '',
        className: 'link-a',
        title: 'Link title',
        lang: 'de'
    };

    it('should render nothing without to', function fnIt() {
        const { asFragment } = render(
            <A {...props} to="">
                Link Children
            </A>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly with defaults', function fnIt() {
        const { asFragment } = render(<A to="/persona">Link Children</A>);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should handle correct link to relative page', function fnIt() {
        const { asFragment } = render(
            <A {...props} to="/persona">
                Link Children
            </A>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should handle correct link to external page 1', function fnIt() {
        const { asFragment } = render(
            <A {...props} to="http://www.foo.bar">
                Link Children
            </A>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should handle correct link to external page 2', function fnIt() {
        const { asFragment } = render(
            <A {...props} to="http://foo.bar">
                Link Children
            </A>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should handle correct link to external page 3', function fnIt() {
        const { asFragment } = render(
            <A {...props} to="www.foo.bar">
                Link Children
            </A>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should handle events correctly', function fnIt() {
        const onClick = jest.fn();
        render(
            <A {...props} to="/persona" onClick={onClick}>
                Link Children
            </A>
        );

        userEvent.click(screen.getByText('Link Children'));
        expect(onClick).toHaveBeenCalled();
    });
});

describe('isLink', function fnDescribe() {
    it('should check to parameter correctly', function fnIt() {
        expect(isLink()).toBeFalsy();
        expect(isLink('/foo')).toBeFalsy();
        expect(isLink('www.foo.bar')).toBeTruthy();
        expect(isLink('http://foo.bar')).toBeTruthy();
        expect(isLink('https://foo.bar')).toBeTruthy();
        expect(isLink('tel:123918238129')).toBeTruthy();
    });
});

describe('isNavLink', function fnDescribe() {
    it('should check to parameter correctly', function fnIt() {
        expect(isNavLink()).toBeFalsy();
        expect(isNavLink('www.foo.bar')).toBeFalsy();
        expect(isNavLink('/foo')).toBeTruthy();
    });
});

describe('getAttributes', function fnDescribe() {
    it('should create attributes correctly', function fnIt() {
        expect(getAttributes()).toMatchSnapshot();
        expect(
            getAttributes({
                to: ''
            })
        ).toMatchSnapshot();
        expect(
            getAttributes({
                activeClassName: 'test-css',
                exact: true,
                strict: true,
                to: 'www.foo.bar'
            })
        ).toMatchSnapshot();
        expect(
            getAttributes({
                activeClassName: 'test-css',
                exact: true,
                strict: true,
                to: '/foo'
            })
        ).toMatchSnapshot();
    });
});
