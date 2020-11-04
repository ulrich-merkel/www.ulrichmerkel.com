/* eslint-disable import/no-extraneous-dependencies, func-names */
import * as React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';

import mockedStore from '../../__mocks__/store';
import LayoutHeaderContainer from '../header';

describe('common/component/layout/header', function () {
    it('should render correctly', function () {
        const defaultProps = {
            handleIntlChangeLocale: jest.fn(),
            content: {
                menu: {}
            },
            className: 'layout-header'
        };

        const tree = renderer
            .create(
                <Provider store={mockedStore}>
                    <MemoryRouter>
                        <LayoutHeaderContainer {...defaultProps}>
                            Header Children
                        </LayoutHeaderContainer>
                    </MemoryRouter>
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
