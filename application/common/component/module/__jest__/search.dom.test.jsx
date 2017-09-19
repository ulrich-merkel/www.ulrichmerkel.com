/* eslint-disable import/no-extraneous-dependencies, func-names */
// @see https://github.com/airbnb/enzyme/issues/426
// @see https://github.com/facebook/jest/issues/1353
import 'jsdom-global/register';
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import sinon from 'sinon';

import mockedStore from '../../__mocks__/store';
import ModuleSearch from '../search';

jest.mock('../../../utils/search');

describe('common/component/module/search', function () {
    const handleChangeDialogVisibleSearch = sinon.spy();
    const defaultProps = {
        content: {},
        className: 'module-list',
        componentType: 'ol',
        searchTerm: 'summer',
        intlLocale: 'en-EN'
    };

    it('should handle click callback', function () {
        const tree = mount(
            <Provider store={mockedStore}>
                <ModuleSearch
                    handleChangeDialogVisibleSearch={handleChangeDialogVisibleSearch}
                    {...defaultProps}
                >
                    Module list children
                </ModuleSearch>
            </Provider>
        );

        const searchResults = tree.find('.m-list__item');
        if (searchResults.length) {
            searchResults.first().simulate('click');
        }
    });
});
