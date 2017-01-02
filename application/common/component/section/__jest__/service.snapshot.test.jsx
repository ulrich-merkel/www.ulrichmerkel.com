/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import mockedStore from './../../__mocks__/store';
import SectionService from './../service';

describe('common/component/section/service', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <Provider store={mockedStore}>
                <SectionService
                    content={{}}
                >
                    Section service children
                </SectionService>
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
