/* eslint-disable import/no-extraneous-dependencies, func-names */
import * as React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import mockedStore from '../../../__mocks__/store';
import SectionCommonGrid from '../grid';

describe('common/component/section/common/grid', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <Provider store={mockedStore}>
                <SectionCommonGrid
                    page={{
                        viewsAfterReload: 1
                    }}
                >
                    Section common grid children
                </SectionCommonGrid>
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
