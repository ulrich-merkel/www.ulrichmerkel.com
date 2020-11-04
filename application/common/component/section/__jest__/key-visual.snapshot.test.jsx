/* eslint-disable import/no-extraneous-dependencies, func-names */
import * as React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import mockedStore from '../../__mocks__/store';
import SectionKeyVisual from '../key-visual';

describe('common/component/section/key-visual', function () {
    it('should render correctly', function () {
        const tree = renderer
            .create(
                <Provider store={mockedStore}>
                    <SectionKeyVisual content={{}}>
                        Section key-visual children
                    </SectionKeyVisual>
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
