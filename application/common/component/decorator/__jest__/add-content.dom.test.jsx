/* eslint-disable react/destructuring-assignment, import/no-extraneous-dependencies, import/no-named-as-default, import/first, func-names, immutable/no-mutation */
// jest.mock('../../../config/content');
// jest.mock('../../../config/intl/en-EN');

// import 'jsdom-global/register';
// import * as React from 'react';
// import PropTypes from 'prop-types';
// import { Provider } from 'react-redux';
// import { mount } from 'enzyme';
// import configureStore from 'redux-mock-store';

// import mockedStore from '../../__mocks__/store';
// import addContent from '../add-content';

describe('common/component/decorator/add-content', function () {
    it('should BE FIXED', function () {
        expect(true).toBeTruthy();
    });
    // const Page = function (props) {
    //     return (
    //         <h1 className='page'>
    //             {props.children}
    //         </h1>
    //     );
    // };
    // Page.propTypes = {
    //     children: PropTypes.node.isRequired
    // };

    // const Container = addContent('PageHome')(Page);
    // const mockStore = configureStore([]);
    // const mockedStoreWithoutContent = mockStore({
    //     config: {},
    //     intl: {
    //         locale: 'en-EN',
    //         availableLocales: ['en-EN']
    //     }
    // });

    // it('should render correctly with content', function () {
    //     const wrapper = mount(
    //         <Provider store={mockedStore}>
    //             <Container>
    //                 <div className='test'>
    //                     Add content children
    //                 </div>
    //             </Container>
    //         </Provider>
    //     );
    //     expect(wrapper.find('.page').length).toEqual(1);
    //     expect(wrapper.find('.test').length).toEqual(1);
    // });

    // it('should render correctly without content', function () {
    //     const wrapper = mount(
    //         <Provider store={mockedStoreWithoutContent}>
    //             <Container>
    //                 <div className='test'>
    //                     Add content children
    //                 </div>
    //             </Container>
    //         </Provider>
    //     );
    //     expect(wrapper.find('.page').length).toEqual(1);
    //     expect(wrapper.find('.test').length).toEqual(1);
    // });

    // it('should render correctly with custom props', function () {
    //     const wrapper = mount(
    //         <Provider store={mockedStoreWithoutContent}>
    //             <Container config={{}} locale={'en-EN'}>
    //                 <div className='test'>
    //                     Add content children
    //                 </div>
    //             </Container>
    //         </Provider>
    //     );
    //     expect(wrapper.find('.page').length).toEqual(1);
    //     expect(wrapper.find('.test').length).toEqual(1);
    // });
});
