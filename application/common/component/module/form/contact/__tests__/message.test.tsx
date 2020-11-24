import * as React from 'react';
import { render } from '../../../../../../__tests__/utils/test-utils';
import { ModuleFormContactMessage } from '../message';

describe('ModuleFormContactMessage', function fnDescribe() {
    const defaultProps = {
        btnLabel: 'click',
        btnTitle: 'title',
        headline: 'headline',
        text: 'text',
        onReset: jest.fn(),
        resetUrl: 'resetUrl'
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <ModuleFormContactMessage {...defaultProps} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
