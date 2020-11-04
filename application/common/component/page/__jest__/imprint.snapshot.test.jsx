/* eslint-disable import/no-extraneous-dependencies, func-names */
import * as React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import mockedStore from '../../__mocks__/store';
import PageImprint from '../imprint';

describe('common/component/page/imprint', function () {
    it('should render correctly', function () {
        const tree = renderer
            .create(
                <Provider store={mockedStore}>
                    <MemoryRouter>
                        <PageImprint />
                    </MemoryRouter>
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
