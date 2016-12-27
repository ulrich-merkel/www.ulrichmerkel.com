/* eslint-disable import/no-extraneous-dependencies, func-names, import/first */
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import mockedStore from './../../__mocks__/store';
import ComponentToBeTested from './../dialog';

describe('component/layout/dialog', function () {
    describe('Snapshot', function () {
        const content = {};

        it('should render correctly', function () {
            const tree = renderer.create(
                <Provider store={mockedStore}>
                    <ComponentToBeTested content={content} dialogVisible>
                        Hello
                    </ComponentToBeTested>
                </Provider>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
