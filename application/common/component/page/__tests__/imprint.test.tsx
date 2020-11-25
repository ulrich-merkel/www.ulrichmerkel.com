import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { PageImprint } from '../imprint';

describe('PageImprint', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(<PageImprint />);
        expect(asFragment()).toMatchSnapshot();
    });
});
