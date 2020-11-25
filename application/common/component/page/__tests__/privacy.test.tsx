import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { PagePrivacy } from '../privacy';

describe('PagePrivacy', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(<PagePrivacy />);
        expect(asFragment()).toMatchSnapshot();
    });
});
