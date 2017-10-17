/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';

import mockedStore from '../../__mocks__/store';
import { PageWork } from '../work';

describe('common/component/page/privacy', function () {
    const defaultProps = {
        locale: 'en-EN',
        match: {
            params: {
                work: 'momentariness'
            }
        },
        config: {
            head: {
                title: 'title',
                meta: [
                    {
                        name: 'description',
                        content: 'content'
                    }
                ]
            },
            section1: {
                headline: 'Section headline',
                lead: 'Section lead',
                btnTitle: 'Section button title',
                btnLabel: 'Section button label'
            }
        }
    };

    it('should render correctly', function () {
        const tree = renderer.create(
            <Provider store={mockedStore}>
                <MemoryRouter>
                    <PageWork {...defaultProps} />
                </MemoryRouter>
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should return null if no work param is given', function () {
        const tree = renderer.create(
            <Provider store={mockedStore}>
                <MemoryRouter>
                    <PageWork
                        {...defaultProps}
                        match={{params: {
                            work: ''
                        }}}
                    />
                </MemoryRouter>
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
