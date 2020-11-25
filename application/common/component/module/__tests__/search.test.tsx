import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { ModuleSearch, ModuleSearchConnected } from '../search';

jest.mock('../../../utils/search');

describe('ModuleSearch', function fnDescribe() {
    const defaultProps = {
        config: {},
        content: {},
        className: 'module-list',
        htmlElement: 'ol',
        searchTerm: 'summer',
        intlLocale: 'en-EN',
        itemType: 'itemType'
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <ModuleSearch {...defaultProps}>Module list children</ModuleSearch>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly the connected version', function fnIt() {
        const { asFragment } = render(
            <ModuleSearchConnected {...defaultProps}>
                Module list children
            </ModuleSearchConnected>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
