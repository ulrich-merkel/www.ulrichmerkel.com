/* eslint-disable import/first, import/no-extraneous-dependencies, func-names */
jest.mock('react/lib/ReactDefaultInjection');

import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import mockedStore from './../../__mocks__/store';
import ComponentToBeTested from './../not-found';

describe('component/page/not-found', function () {
    describe('Snapshot', function () {
        it('should render correctly', function () {
            const tree = renderer.create(
                <Provider store={mockedStore}>
                    <ComponentToBeTested />
                </Provider>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
