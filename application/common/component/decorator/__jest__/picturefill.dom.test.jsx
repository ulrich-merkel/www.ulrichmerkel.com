/* eslint-disable import/no-extraneous-dependencies, import/no-named-as-default, import/first, func-names, immutable/no-mutation */
import 'jsdom-global/register';
import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import mockedStore from './../../__mocks__/store';
import picturefill from './../picturefill';

describe('common/component/decorator/picturefill', function () {
    const Page = function (props) {
        return (
            <h1>{props.children}</h1>
        );
    };
    Page.propTypes = {
        children: PropTypes.node.isRequired
    };

    const Container = picturefill(Page);

    it('should render correctly', function () {
        const wrapper = mount(
            <Provider store={mockedStore}>
                <Container>
                    Picturefill children
                </Container>
            </Provider>
        );
        wrapper.setProps({
            foo: 'bar'
        });
        wrapper.unmount();
    });

});
