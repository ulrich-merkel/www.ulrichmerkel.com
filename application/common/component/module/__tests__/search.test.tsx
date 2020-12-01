import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { ModuleSearch, ModuleSearchConnected } from '../search';

jest.mock('../../../utils/search');

describe('ModuleSearch', function fnDescribe() {
    const props = {
        config: {},
        content: {
            list: []
        },
        className: 'module-list',
        htmlElement: 'ol',
        searchTerm: 'summer',
        intlLocale: 'en-EN',
        itemType: 'itemType'
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <ModuleSearch {...props}>Module list children</ModuleSearch>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly without content', function fnIt() {
        const { asFragment } = render(
            <ModuleSearch>Module list children</ModuleSearch>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly the connected version', function fnIt() {
        const { asFragment } = render(
            <ModuleSearchConnected {...props}>
                Module list children
            </ModuleSearchConnected>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
