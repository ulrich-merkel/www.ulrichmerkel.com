/* eslint-disable import/no-extraneous-dependencies, func-names */
import * as React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import mockedStore from '../../__mocks__/store';
import ComponentToBeTested from '../loader';

describe('component/layout/loader', function () {
    describe('Snapshot', function () {
        it('should render correctly', function () {
            const content = {
                headline: 'Headline',
                lead: 'Lorem ipsum'
            };
            const tree = renderer.create(
                <Provider store={mockedStore}>
                    <ComponentToBeTested content={content}>
                        Hello
                    </ComponentToBeTested>
                </Provider>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
