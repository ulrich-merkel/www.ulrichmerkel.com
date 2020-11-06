import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { ModuleFormThemeConnected } from '../theme';

describe('ModuleFormTheme', function fnDescribe() {
    const defaultProps = {
        content: {},
        csrfToken: '',
        themeSelected: 'default',
        onchangeThemeSelectedDefault: jest.fn(),
        onchangeThemeSelectedGrey: jest.fn()
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <ModuleFormThemeConnected {...defaultProps}>
                Module form children
            </ModuleFormThemeConnected>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
