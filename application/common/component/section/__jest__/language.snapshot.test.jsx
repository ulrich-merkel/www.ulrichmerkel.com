/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import mockedStore from '../../__mocks__/store';
import SectionLanguage from '../language';

describe('common/component/section/language', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <Provider store={mockedStore}>
                <SectionLanguage
                    content={{}}
                >
                    Section language children
                </SectionLanguage>
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
