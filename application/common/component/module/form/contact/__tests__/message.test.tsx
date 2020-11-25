import * as React from 'react';
import { render } from '../../../../../../__tests__/utils/test-utils';
import { ModuleFormContactMessage } from '../message';

describe('ModuleFormContactMessage', function fnDescribe() {
    const props = {
        btnLabel: 'click',
        btnTitle: 'title',
        headline: 'headline',
        text: 'text',
        onReset: jest.fn(),
        resetUrl: 'resetUrl'
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(<ModuleFormContactMessage {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
