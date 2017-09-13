/* eslint-disable import/no-extraneous-dependencies, import/no-named-as-default, import/first, func-names, immutable/no-mutation */
import 'jsdom-global/register';
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import mockedStore from './../../__mocks__/store';
import addPageTracking from './../add-page-tracking';

describe('common/component/decorator/add-page-tracking', function () {
    const Page = function (props) {
        return (
            <h1>{props.children}</h1>
        );
    };
    Page.propTypes = {
        children: PropTypes.node.isRequired
    };

    const Container = addPageTracking(Page);

    it('should render correctly', function () {
        const wrapper = mount(
            <Provider store={mockedStore}>
                <Container>
                    Add page tracking children
                </Container>
            </Provider>
        );
        wrapper.unmount();
    });

});
