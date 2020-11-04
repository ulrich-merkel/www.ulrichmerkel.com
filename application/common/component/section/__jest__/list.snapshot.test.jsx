/* eslint-disable import/no-extraneous-dependencies, func-names */
import * as React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import mockedStore from '../../__mocks__/store';
import SectionList from '../list';

describe('common/component/section/list', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <Provider store={mockedStore}>
                <SectionList
                    content={{}}
                    isMain
                >
                    Section list children
                </SectionList>
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
