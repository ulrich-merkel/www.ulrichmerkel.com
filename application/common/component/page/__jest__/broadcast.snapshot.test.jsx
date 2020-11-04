/* eslint-disable import/no-extraneous-dependencies, func-names */
import * as React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

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
        const tree = renderer
            .create(
                <Provider store={mockedStore}>
                    <MemoryRouter>
                        <PageBroadcast>Page broadcast children</PageBroadcast>
                    </MemoryRouter>
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render correctly as dialog', function () {
        const tree = renderer
            .create(
                <Provider store={mockedStore}>
                    <MemoryRouter>
                        <PageBroadcast {...props} isDialog>
                            Page broadcast children as dialog
                        </PageBroadcast>
                    </MemoryRouter>
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
