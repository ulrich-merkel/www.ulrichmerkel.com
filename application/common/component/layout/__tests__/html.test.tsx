import * as React from 'react';
import Helmet from 'react-helmet';
import { render } from '../../../../__tests__/utils/test-utils';
import { getMockedStore } from '../../../../__tests__/utils/get-mocked-store';
import { LayoutHtml, LayoutHtmlConnected } from '../html';

jest.mock('../../../utils/csp');

describe(' LayoutHtml', function fnDescribe() {
    const props = {
        handleScrollTop: jest.fn(),
        content: {
            footer: 'test'
        },
        className: 'layout-footer'
    };
    const mockedStore = getMockedStore();

    // @see {@link https://github.com/nfl/react-helmet/issues/203}
    beforeEach(function fnBeforeEach() {
        Helmet.canUseDOM = false; // eslint-disable-line immutable/no-mutation
    });

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <LayoutHtml
                {...props}
                cssBase=""
                scriptBootstrap=""
                store={mockedStore}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly the connected version', function fnIt() {
        const { asFragment } = render(
            <LayoutHtmlConnected
                {...props}
                cssBase=""
                scriptBootstrap=""
                store={mockedStore}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
