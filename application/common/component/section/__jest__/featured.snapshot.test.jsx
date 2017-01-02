/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import mockedStore from './../../__mocks__/store';
import SectionFeatured from './../featured';

describe('common/component/section/featured', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <Provider store={mockedStore}>
                <SectionFeatured
                    content={{}}
                >
                    Section featured children
                </SectionFeatured>
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
