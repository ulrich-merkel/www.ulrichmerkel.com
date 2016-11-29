/* eslint-disable import/no-extraneous-dependencies, func-names, import/first */
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
// import ReactTestUtils from 'react-addons-test-utils';

import mockedStore from './../../__mocks__/store';
import ComponentToBeTested from './../dialog';

describe('component/layout/dialog', function () {
    describe('Snapshot', function () {
        const content = {};
        // const handleChangeDialogVisible = jest.fn();

        it('should render correctly', function () {
            const tree = renderer.create(
                <Provider store={mockedStore}>
                    <ComponentToBeTested content={content}>
                        Hello
                    </ComponentToBeTested>
                </Provider>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
        // @TODO: FIXME: Handle events with jest
        // it('should appear if needed', function () {
        //     const jsx = (
        //         <Provider store={mockedStore}>
        //             <ComponentToBeTested
        //                 content={content}
        //                 dialogVisible={true}
        //                 handleChangeDialogVisible={handleChangeDialogVisible}
        //             >
        //                 Hello
        //             </ComponentToBeTested>
        //         </Provider>
        //     );
        //     const component = renderer.create(
        //         jsx
        //     );
        //
        //     let tree = component.toJSON();
        //     expect(tree).toMatchSnapshot();
        //
        //     const button = ReactTestUtils.findRenderedDOMComponentWithClass(jsx, 'l-dialog__button--close')
        //
        //     ReactTestUtils.Simulate.keyDown(button, {key: 'Esc', keyCode: 27, which: 27});
        //     expect(handleChangeDialogVisible).toHaveBeenCalled();
        //     tree = component.toJSON();
        //     expect(tree).toMatchSnapshot();
        //
        // });
    });
});
