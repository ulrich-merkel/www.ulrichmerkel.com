/* eslint-disable import/no-extraneous-dependencies, func-names */
// @see https://github.com/airbnb/enzyme/issues/426
// @see https://github.com/facebook/jest/issues/1353
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';

import mockedStore from '../../__mocks__/store';
import ModuleTextContainer from '../text';

describe('common/component/module/text', function () {
    const defaultProps = {
        componentType: 'div',
        className: 'module-text',
        hasColumns2: false,
        itemType: 'foo',
        content: {
            text: [
                {
                    headline: 'headline',
                    content: 'content'
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
        const tree = renderer.create(
            <Provider store={mockedStore}>
                <MemoryRouter>
                    <ModuleTextContainer
                        {...defaultProps}
                    >
                        Module text children
                    </ModuleTextContainer>
                </MemoryRouter>
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should return null if no content is given', function () {
        const tree = renderer.create(
            <Provider store={mockedStore}>
                <MemoryRouter>
                    <ModuleTextContainer
                        {...defaultProps}
                        content={{
                            text: null
                        }}
                    >
                        Module text children not rendered
                    </ModuleTextContainer>
                </MemoryRouter>
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render no itemType if unset', function () {
        const tree = renderer.create(
            <Provider store={mockedStore}>
                <MemoryRouter>
                    <ModuleTextContainer
                        {...defaultProps}
                        itemType={null}
                    >
                        Module text children
                    </ModuleTextContainer>
                </MemoryRouter>
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
