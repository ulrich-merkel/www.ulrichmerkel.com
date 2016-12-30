/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import mockedStore from './../../../__mocks__/store';
import SectionCommonGridSpaced from './../grid-spaced';

describe('common/component/section/common/grid-spaced', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <Provider store={mockedStore}>
                <SectionCommonGridSpaced
                    page={{
                        viewsAfterReload: 1
                    }}
                >
                    Section common grid spaced children
                </SectionCommonGridSpaced>
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
