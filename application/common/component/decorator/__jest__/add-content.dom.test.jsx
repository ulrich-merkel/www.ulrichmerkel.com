/* eslint-disable import/no-extraneous-dependencies, import/no-named-as-default, import/first, func-names */
jest.mock('./../../../config/content');
jest.mock('./../../../config/intl/en-EN');

import 'jsdom-global/register';
import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import mockedStore from './../../__mocks__/store';
import addContent from './../add-content';

describe('common/component/decorator/add-content', function () {
    const Page = function (props) {
        return (
            <h1>{props.children}</h1>
        );
    };
    Page.propTypes = {
        children: PropTypes.node.isRequired
    };

    const Container = addContent('Page')(Page);

    it('should render correctly', function () {
        const wrapper = mount(
            <Provider store={mockedStore}>
                <Container>
                    Add content children
                </Container>
            </Provider>
        );
        wrapper.unmount();
    });

});
