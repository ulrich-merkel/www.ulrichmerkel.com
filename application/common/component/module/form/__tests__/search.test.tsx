import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { ModuleFormSearch, ModuleFormSearchConnected } from '../search';

describe('ModuleFormSearch', function fnDescribe() {
    const defaultProps = {
        content: {},
        csrfToken: '',
        searchTerm: '',
        onChangeSearchTerm: jest.fn()
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(<ModuleFormSearch {...defaultProps} />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly without content', function fnIt() {
        const { asFragment } = render(
            <ModuleFormSearch {...defaultProps} content={null} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly the connected version', function fnIt() {
        const { asFragment } = render(
            <ModuleFormSearchConnected {...defaultProps} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
