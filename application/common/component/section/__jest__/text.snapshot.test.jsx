/* eslint-disable react/jsx-props-no-spreading, import/no-extraneous-dependencies, func-names */
import * as React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import mockedStore from '../../__mocks__/store';
import SectionText from '../text';

describe('common/component/section/text', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <Provider store={mockedStore}>
                <SectionText
                    content={{}}
                    isMain
                >
                    Section text children
                </SectionText>
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
