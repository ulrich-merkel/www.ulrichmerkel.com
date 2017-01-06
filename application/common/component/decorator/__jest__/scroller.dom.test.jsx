/* eslint-disable import/no-extraneous-dependencies, import/no-named-as-default, import/first, func-names */
import 'jsdom-global/register';
import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import mockedWindowEvents from './../../__mocks__/window-events';
import mockedStore from './../../__mocks__/store';
import scroller from './../scroller';

describe('common/component/decorator/scroller', function () {
    const Page = function (props) {
        return (
            <h1>{props.children}</h1>
        );
    };
    Page.propTypes = {
        children: PropTypes.node
    };

    const Container = scroller(Page);

    it('should render correctly', function () {
        const wrapper = mount(
            <Provider store={mockedStore}>
                <Container>
                    Scroller children
                </Container>
            </Provider>
        );
        mockedWindowEvents.scroll();
        wrapper.setProps({
            foo: 'bar'
        });
        mockedWindowEvents.scroll();
        wrapper.unmount();
    });

});