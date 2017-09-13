/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import mockedStore from '../../__mocks__/store';
import PageBroadcast from '../broadcast';

describe('common/component/page/broadcast', function () {
    const props = {
        content: {
            head: {},
            section1: {},
            formSearch: {}
        }
    };

    it('should render correctly', function () {
        const tree = renderer.create(
            <Provider store={mockedStore}>
                <PageBroadcast>
                    Page broadcast children
                </PageBroadcast>
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render correctly as dialog', function () {
        const tree = renderer.create(
            <Provider store={mockedStore}>
                <PageBroadcast {...props} isDialog>
                    Page broadcast children as dialog
                </PageBroadcast>
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
