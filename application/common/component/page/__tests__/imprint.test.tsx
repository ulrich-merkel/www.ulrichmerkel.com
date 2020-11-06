/* eslint-disable func-names */
import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { PageImprint } from '../imprint';

describe('PageImprint', function () {
    it('should render correctly', function () {
        const { asFragment } = render(<PageImprint />);
        expect(asFragment()).toMatchSnapshot();
    });
});
