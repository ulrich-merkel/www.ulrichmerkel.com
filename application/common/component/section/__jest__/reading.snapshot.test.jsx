/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import mockedStore from './../../__mocks__/store';
import SectionReading from './../reading';

describe('common/component/section/reading', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <Provider store={mockedStore}>
                <SectionReading
                    content={{}}
                >
                    Section reading children
                </SectionReading>
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
