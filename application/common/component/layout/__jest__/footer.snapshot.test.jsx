/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import mockedStore from './../../__mocks__/store';
import ComponentToBeTested from './../footer';

describe('component/layout/footer', function () {
    describe('Snapshot', function () {
        it('should render correctly', function () {
            const handleScrollTop = jest.fn();
            const content = {};

            const tree = renderer.create(
                <Provider store={mockedStore}>
                    <ComponentToBeTested
                        className='foo-bar'
                        handleScrollTop={handleScrollTop}
                        content={content}
                    >
                        Hello
                    </ComponentToBeTested>
                </Provider>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
