/* eslint-disable func-names */
import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { PageNotFound } from '../not-found';

describe('PageNotFound', function () {
    it('should render correctly', function () {
        const { asFragment } = render(<PageNotFound />);
        expect(asFragment()).toMatchSnapshot();
    });
});
