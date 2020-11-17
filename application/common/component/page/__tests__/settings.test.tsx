import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { PageSettings } from '../settings';

describe('PageSettings', function fndDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(<PageSettings />);
        expect(asFragment()).toMatchSnapshot();
    });
});
