/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import mockedStore from './../../__mocks__/store';
import ComponentToBeTested from './../header';

describe('component/layout/header', function () {
    describe('Snapshot', function () {
        it('should render correctly', function () {
            const handleIntlChangeLocale = jest.fn();
            const content = {
                menu: {}
            };

            const tree = renderer.create(
                <Provider store={mockedStore}>
                    <ComponentToBeTested
                        handleIntlChangeLocale={handleIntlChangeLocale}
                        className={'foo-bar'}
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
