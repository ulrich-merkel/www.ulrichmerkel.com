/* eslint-disable import/no-extraneous-dependencies, func-names */
import * as React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import mockedStore from '../../__mocks__/store';
import SectionContact from '../contact';

describe('common/component/section/contact', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <Provider store={mockedStore}>
                <SectionContact
                    content={{}}
                    isMain
                >
                    Section contact children
                </SectionContact>
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
