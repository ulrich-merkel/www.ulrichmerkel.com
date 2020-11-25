import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { PageDisclaimer } from '../disclaimer';

describe('PageDisclaimer', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(<PageDisclaimer />);
        expect(asFragment()).toMatchSnapshot();
    });
});
