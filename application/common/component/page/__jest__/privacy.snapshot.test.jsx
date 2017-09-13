/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import mockedStore from '../../__mocks__/store';
import PagePrivacy from '../privacy';

describe('common/component/page/privacy', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <Provider store={mockedStore}>
                <PagePrivacy />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
