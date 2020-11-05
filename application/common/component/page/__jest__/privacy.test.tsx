/* eslint-disable func-names */
import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { PagePrivacy } from '../privacy';

describe('PagePrivacy', function () {
    it('should render correctly', function () {
        const { asFragment } = render(<PagePrivacy />);
        expect(asFragment()).toMatchSnapshot();
    });
});
