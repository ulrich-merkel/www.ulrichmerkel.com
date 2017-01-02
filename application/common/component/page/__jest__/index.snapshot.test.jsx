/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import mockedStore from './../../__mocks__/store';
import PageIndex from './../index';

describe('common/component/page/index', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <Provider store={mockedStore}>
                <PageIndex />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
