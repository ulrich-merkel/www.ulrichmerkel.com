/* eslint-disable func-names */
import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { PageDisclaimer } from '../disclaimer';

describe('PageDisclaimer', function () {
    it('should render correctly', function () {
        const { asFragment } = render(<PageDisclaimer />);
        expect(asFragment()).toMatchSnapshot();
    });
});
