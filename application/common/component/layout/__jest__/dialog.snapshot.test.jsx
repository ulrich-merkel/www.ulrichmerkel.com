/* eslint-disable import/no-extraneous-dependencies, func-names, import/first */
import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import mockedStore from './../../__mocks__/store';
import { LayoutDialog } from './../dialog';

describe('common/component/layout/dialog', function () {
    const defaultProps = {
        dialogVisible: true,
        page: 'foo',
        dialogPage: 'foo',
        content: {}
    };

    it('should render correctly', function () {
        const tree = shallow(
            <LayoutDialog {...defaultProps}>
                Dialog Children
            </LayoutDialog>
        );
        expect(tree.html()).toMatchSnapshot();
    });
    it('should render null if not visible', function () {
        const tree = shallow(
            <LayoutDialog {...defaultProps} dialogVisible={false}>
                Dialog Children
            </LayoutDialog>
        );
        expect(tree.html()).toMatchSnapshot();

        tree.setProps({
            dialogVisible: true,
            page: null
        });
        expect(tree.html()).toMatchSnapshot();
    });
    // it('should render correctly', function () {
    //     console.log(mockedStore)
    //     const tree = shallow(
    //         <Provider store={mockedStore}>
    //             <LayoutDialogContainer {...defaultProps}>
    //                 Dialog Children
    //             </LayoutDialogContainer>
    //         </Provider>
    //     );
    //     expect(tree.html()).toMatchSnapshot();
    // });
    // it('should render null if not visible', function () {
    //     const tree = shallow(
    //         <Provider store={mockedStore}>
    //             <LayoutDialogContainer {...defaultProps} dialogVisible={false}>
    //                 Dialog Children
    //             </LayoutDialogContainer>
    //         </Provider>
    //     );
    //     expect(tree.html()).toMatchSnapshot();
    //
    //     tree.setProps({
    //         dialogVisible: true,
    //         page: null
    //     });
    //     expect(tree.html()).toMatchSnapshot();
    // });
});
