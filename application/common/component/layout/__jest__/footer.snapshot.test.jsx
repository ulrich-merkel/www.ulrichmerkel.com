/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import mockedStore from './../../__mocks__/store';
import LayoutFooterContainer from './../footer';

describe('common/component/layout/footer', function () {
    it('should render correctly', function () {
        const defaultProps = {
            handleScrollTop: jest.fn(),
            content: {
                footer: 'test'
            },
            className: 'layout-footer'
        };

        const tree = renderer.create(
            <Provider store={mockedStore}>
                <LayoutFooterContainer
                    {...defaultProps}
                >
                    Footer Children
                </LayoutFooterContainer>
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
