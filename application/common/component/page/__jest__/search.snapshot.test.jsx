/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import mockedStore from '../../__mocks__/store';
import PageSearch from '../search';

describe('common/component/page/search', function () {
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
                <MemoryRouter>
                    <PageSearch {...props}>
                        Page search children
                    </PageSearch>
                </MemoryRouter>
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render correctly as dialog', function () {
        const tree = renderer.create(
            <Provider store={mockedStore}>
                <MemoryRouter>
                    <PageSearch {...props} isDialog>
                        Page search children as dialog
                    </PageSearch>
                </MemoryRouter>
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
