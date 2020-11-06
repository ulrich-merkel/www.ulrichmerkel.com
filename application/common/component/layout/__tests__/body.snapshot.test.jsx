/* eslint-disable import/no-extraneous-dependencies, func-names, import/first */
import * as React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';

import mockedStore from '../../__mocks__/store';
import { LayoutBody } from '../body';

describe('common/component/layout/body', function () {
    const defaultProps = {
        content: {}
    };

    it('should render correctly', function () {
        const tree = renderer
            .create(
                <Provider store={mockedStore}>
                    <MemoryRouter>
                        <LayoutBody {...defaultProps}>Body Children</LayoutBody>
                    </MemoryRouter>
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
