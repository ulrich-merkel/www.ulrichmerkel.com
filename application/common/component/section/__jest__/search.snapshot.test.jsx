/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import mockedStore from '../../__mocks__/store';
import SectionSearch from '../search';

describe('common/component/section/search', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <Provider store={mockedStore}>
                <SectionSearch
                    content={{}}
                    isMain
                >
                    Section search children
                </SectionSearch>
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
