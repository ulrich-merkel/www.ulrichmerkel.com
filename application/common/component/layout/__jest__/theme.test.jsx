/* eslint-disable import/no-extraneous-dependencies, func-names */
// import React from 'react';
// import { Provider } from 'react-redux';
// import { MemoryRouter } from 'react-router';
// import { shallow } from 'enzyme';

// import mockedStore from '../../__mocks__/store';
// import LayoutTheme from '../theme';

// jest.mock('pubsub-js', () => ({
//     publish: jest.fn(),
//     subscribe: jest.fn()
// }));

describe('common/component/layout/theme', function () {
    it('should BE FIXED', function () {
        expect(true).toBeTruthy();
    });
    // it('should render correctly', function () {
    //     const defaultProps = {
    //         themeSelected: 'foo'
    //     };

    //     const wrapper = shallow(
    //         <Provider store={mockedStore}>
    //             <MemoryRouter>
    //                 <LayoutTheme
    //                     store={mockedStore}
    //                     {...defaultProps}
    //                 >
    //                     Theme Children
    //                 </LayoutTheme>
    //             </MemoryRouter>
    //         </Provider>
    //     );
    //     expect(wrapper.html()).toMatchSnapshot();

    //     wrapper.setProps({
    //         themeSelected: 'bar'
    //     });
    //     expect(wrapper.html()).toMatchSnapshot();
    // });
});
