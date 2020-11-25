import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { PageNotFound } from '../not-found';

describe('PageNotFound', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(<PageNotFound />);
        expect(asFragment()).toMatchSnapshot();
    });
});
