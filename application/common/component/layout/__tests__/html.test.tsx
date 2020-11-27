import * as React from 'react';
import Helmet from 'react-helmet';
import { render } from '../../../../__tests__/utils/test-utils';
import { getMockedStore } from '../../../../__tests__/utils/get-mocked-store';
import { LayoutHtml, LayoutHtmlConnected } from '../html';

jest.mock('../../../utils/csp');

describe(' LayoutHtml', function fnDescribe() {
    const mockedStore = getMockedStore();
    const props = {
        cssBase: '',
        scriptBootstrap: '',
        store: mockedStore,
        handleScrollTop: jest.fn(),
        content: {
            footer: 'test'
        },
        className: 'layout-footer'
    };

    // @see {@link https://github.com/nfl/react-helmet/issues/203}
    beforeEach(function fnBeforeEach() {
        Helmet.canUseDOM = false; // eslint-disable-line immutable/no-mutation
    });

    it('should render correctly', function fnIt() {
        const { asFragment } = render(<LayoutHtml {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly with default props', function fnIt() {
        const { asFragment } = render(<LayoutHtml />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly the connected version', function fnIt() {
        const { asFragment } = render(<LayoutHtmlConnected {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
