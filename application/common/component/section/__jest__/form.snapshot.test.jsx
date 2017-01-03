/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import mockedStore from './../../__mocks__/store';
import SectionForm from './../form';

describe('common/component/section/form', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <Provider store={mockedStore}>
                <SectionForm
                    content={{}}
                    isMain
                >
                    Section form children
                </SectionForm>
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
