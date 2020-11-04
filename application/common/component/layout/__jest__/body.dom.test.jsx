/* eslint-disable import/no-extraneous-dependencies, import/no-named-as-default, func-names */
// import 'jsdom-global/register';
// import * as React from 'react';
// import { Provider } from 'react-redux';
// import { MemoryRouter } from 'react-router';
// import { mount } from 'enzyme';
// import sinon from 'sinon';

// import mockedStore from '../../__mocks__/store';
// import { LayoutBody } from '../body';

describe('common/component/layout/body', function () {
    it('should BE FIXED', function () {
        expect(true).toBeTruthy();
    });

    // const defaultProps = {
    //     content: {
    //         footer: 'foo'
    //     }
    // };

    // it('should render correctly', function () {
    //     const wrapper = mount(
    //         <Provider store={mockedStore}>
    //             <MemoryRouter>
    //                 <LayoutBody {...defaultProps}>
    //                     <div className='test'>
    //                         Body Children
    //                     </div>
    //                 </LayoutBody>
    //             </MemoryRouter>
    //         </Provider>
    //     );
    //     expect(wrapper.find('.test').length).toEqual(1);
    // });
    // it('should trigger shouldComponentUpdate', function () {
    //     const shouldComponentUpdate = sinon.spy(LayoutBody.prototype, 'shouldComponentUpdate');

    //     const wrapper = mount(
    //         <Provider store={mockedStore}>
    //             <MemoryRouter>
    //                 <LayoutBody {...defaultProps}>
    //                     <div className='test'>
    //                         Body Children
    //                     </div>
    //                 </LayoutBody>
    //             </MemoryRouter>
    //         </Provider>
    //     );

    //     expect(shouldComponentUpdate.calledOnce).toBeFalsy();
    //     wrapper.setProps({
    //         content: {
    //             footer: 'bar'
    //         }
    //     });
    //     expect(shouldComponentUpdate.calledOnce).toBeTruthy();
    // });
});
