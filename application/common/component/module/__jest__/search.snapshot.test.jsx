/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';

import mockedStore from '../../__mocks__/store';
import ModuleSearch from '../search';

jest.mock('../../../utils/search');

describe('common/component/module/search', function () {
    const defaultProps = {
        config: {},
        content: {},
        className: 'module-list',
        componentType: 'ol',
        searchTerm: 'summer',
        intlLocale: 'en-EN',
        itemType: 'itemType'
    };

    it('should render correctly', function () {
        const tree = renderer.create(
            <ModuleSearch
                store={mockedStore}
                {...defaultProps}
            >
                Module list children
            </ModuleSearch>
        ).toJSON;
        expect(tree).toMatchSnapshot();
    });
});
