/* eslint-disable react/destructuring-assignment, import/no-extraneous-dependencies, import/no-named-as-default, import/first, func-names, immutable/no-mutation */
import 'jsdom-global/register';
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import mockedStore from '../../__mocks__/store';
import picturefill from '../picturefill';

global.picturefill = jest.fn(); // eslint-disable-line immutable/no-mutation
jest.useFakeTimers();

describe('common/component/decorator/picturefill', function () {
    const Page = function (props) {
        return (
            <h1 className='page'>
                {props.children}
            </h1>
        );
    };
    Page.propTypes = {
        children: PropTypes.node.isRequired
    };

    const Container = picturefill(Page);

    afterEach(function () {
        jest.clearAllTimers();
    });

    it('should render correctly', function () {
        const wrapper = mount(
            <Provider store={mockedStore}>
                <Container>
                    <div className='test'>
Picturefill children
                    </div>
                </Container>
            </Provider>
        );

        expect(wrapper.find('.page').length).toEqual(1);
        expect(wrapper.find('.test').length).toEqual(1);
    });
    it('should call picturefill correctly', function () {
        const wrapper = mount(
            <Provider store={mockedStore}>
                <Container>
                    <div className='test'>
Picturefill children
                    </div>
                </Container>
            </Provider>
        );

        expect(global.picturefill).not.toBeCalled();
        jest.runAllTimers();
        expect(global.picturefill).toHaveBeenCalled();
        expect(global.picturefill.mock.calls.length).toBe(1);

        wrapper.setProps({ bar: 'foo' });
        jest.runAllTimers();
        expect(global.picturefill).toHaveBeenCalled();
    });
    it('should render correctly if picturefill is not present', function () {
        delete global.picturefill;

        const wrapper = mount(
            <Provider store={mockedStore}>
                <Container>
                    <div className='test'>
Picturefill children
                    </div>
                </Container>
            </Provider>
        );

        expect(wrapper.find('.page').length).toEqual(1);
        expect(wrapper.find('.test').length).toEqual(1);
    });
});
