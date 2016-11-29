/* eslint-disable import/no-extraneous-dependencies, func-names, import/first */
jest.mock('./../../../utils/csp');

import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import mockedStore from './../../__mocks__/store';
import ComponentToBeTested from './../html';

describe('component/layout/html', function () {
    describe('Snapshot', function () {
        it('should render correctly', function () {
            const tree = renderer.create(
                <Provider store={mockedStore}>
                    <ComponentToBeTested cssBase={''} scriptBootstrap={''}>
                        Hello
                    </ComponentToBeTested>
                </Provider>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
