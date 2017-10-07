/* eslint-disable import/no-extraneous-dependencies, import/no-named-as-default, import/first, func-names, immutable/no-mutation */
jest.mock('../../../config/content');
jest.mock('../../../config/intl/en-EN');

import 'jsdom-global/register';
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';

import mockedStore from '../../__mocks__/store';
import addContent from '../add-content';

describe('common/component/decorator/add-content', function () {
    const Page = function (props) {
        return (
            <h1>{props.children}</h1>
        );
    };
    Page.propTypes = {
        children: PropTypes.node.isRequired
    };

    const Container = addContent('PageHome')(Page);
    const mockStore = configureStore([]);
    const mockedStoreWithoutContent = mockStore({
        config: {},
        intl: {}
    });

    it('should render correctly with content', function () {
        const wrapper = mount(
            <Provider store={mockedStore}>
                <Container>
                    Add content children
                </Container>
            </Provider>
        );
        wrapper.unmount();
    });

    it('should render correctly without content', function () {
        const mockStore = configureStore([]);
        const mockedStoreWithoutContent = mockStore({
            config: {},
            intl: {
                locale: 'en-EN',
                availableLocales: ['en-EN']
            }
        });
        const wrapper = mount(
            <Provider store={mockedStoreWithoutContent}>
                <Container>
                    Add content children
                </Container>
            </Provider>
        );
        wrapper.unmount();
    });

    it('should render correctly with custom props', function () {
        const wrapper = mount(
            <Provider store={mockedStoreWithoutContent}>
                <Container config={{}} locale={'en-EN'}>
                    Add content children
                </Container>
            </Provider>
        );
        wrapper.unmount();
    });
});
