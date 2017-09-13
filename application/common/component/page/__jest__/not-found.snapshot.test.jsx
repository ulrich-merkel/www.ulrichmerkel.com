/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import mockedStore from '../../__mocks__/store';
import PageNotFound from '../not-found';

describe('common/component/page/not-found', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <Provider store={mockedStore}>
                <PageNotFound />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
