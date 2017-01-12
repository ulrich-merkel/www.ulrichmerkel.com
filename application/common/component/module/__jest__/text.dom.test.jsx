/* eslint-disable import/no-extraneous-dependencies, import/no-named-as-default, func-names */
import 'jsdom-global/register';
import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import mockedStore from './../../__mocks__/store';
import { ModuleText } from './../text';

describe('common/component/module/text', function () {
    const defaultProps = {
        componentType: 'div',
        className: 'module-text',
        hasColumns2: false,
        itemType: 'foo',
        content: {
            text: [
                {
                    headline: 'Headline',
                    content: `
                        After a long experience with broadcast technologies with numerous productions for
                        <a href='/broadcast' class='js-show-broadcast' title='Show my broadcast experiences' rel='noopener noreferrer'>international and national clients</a>,
                        i decided to take a course of web technology studies to take my passion into profession.
                    `
                },
                {
                    headline: 'Headline',
                    content: [
                        'After a long experience with broadcast technologies with numerous productions for',
                        '<a href=\'/broadcast\' class=\'js-show-broadcast\' title=\'Show my broadcast experiences\' rel=\'noopener noreferrer\'>international and national clients</a>',
                        'i decided to take a course of web technology studies to take my passion into profession.'
                    ]
                }
            ],
            datePublished: '123',
            author: 'Author',
            timeStart: '567',
            linkTo: '/bar',
            linkLabel: 'Link label',
            linkTitle: 'Link title',
            btnTo: '/foo',
            btnTitle: 'Button title',
            btnLabel: 'Button label'
        },
        handleChangeDialogVisible: () => {}
    };

    it('should render correctly', function () {
        const App = function () {
            return (
                <Provider store={mockedStore}>
                    <ModuleText {...defaultProps}>
                        Module text children
                    </ModuleText>
                </Provider>
            );
        };
        const wrapper = mount(
            <Router history={hashHistory}>
                <Route path='/' component={App} />
            </Router>
        );

        wrapper.find('a').first().simulate('click');
        wrapper.unmount();
    });
});
