import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { ModuleFormSearchConnected } from '../search';

describe('ModuleFormSearch', function fnDescribe() {
    const defaultProps = {
        content: {},
        csrfToken: '',
        searchTerm: '',
        handleSearchChangeTerm: jest.fn()
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <ModuleFormSearchConnected {...defaultProps}>
                Module form search children
            </ModuleFormSearchConnected>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
