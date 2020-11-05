/* eslint-disable func-names */
import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { PageTheme } from '../theme';

describe('PageTheme', function () {
    it('should render correctly', function () {
        const { asFragment } = render(<PageTheme />);
        expect(asFragment()).toMatchSnapshot();
    });
});
