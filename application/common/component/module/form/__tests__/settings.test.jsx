import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { ModuleFormSettingsConnected } from '../settings';

describe('ModuleFormSettings', function fnDescribe() {
    const defaultProps = {
        content: {},
        csrfToken: '',
        themeSelected: 'default',
        onchangeThemeSelectedDefault: jest.fn(),
        onchangeThemeSelectedGrey: jest.fn()
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <ModuleFormSettingsConnected {...defaultProps}>
                Module form children
            </ModuleFormSettingsConnected>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
