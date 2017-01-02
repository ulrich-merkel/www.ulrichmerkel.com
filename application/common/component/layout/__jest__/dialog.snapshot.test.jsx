/* eslint-disable import/no-extraneous-dependencies, func-names, import/first */
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import mockedStore from './../../__mocks__/store';
import LayoutDialogContainer from './../dialog';

describe('common/component/layout/dialog', function () {
    const defaultProps = {
        dialogVisible: true,
        content: {}
    };

    it('should render correctly', function () {
        const tree = renderer.create(
            <Provider store={mockedStore}>
                <LayoutDialogContainer {...defaultProps}>
                    Dialog Children
                </LayoutDialogContainer>
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render null if not visible', function () {
        const tree = renderer.create(
            <Provider store={mockedStore}>
                <LayoutDialogContainer {...defaultProps} dialogVisible={false}>
                    Dialog Children
                </LayoutDialogContainer>
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
