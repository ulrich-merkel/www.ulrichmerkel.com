/* eslint-disable import/no-extraneous-dependencies, func-names */
import * as React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import mockedStore from '../../__mocks__/store';
import SectionCornerstone from '../cornerstone';

describe('common/component/section/cornerstone', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <Provider store={mockedStore}>
                <SectionCornerstone
                    content={{}}
                >
                    Section cornerstone children
                </SectionCornerstone>
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
