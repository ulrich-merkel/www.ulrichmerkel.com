import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { Nav } from '../nav';

describe('Nav', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(<Nav className="nav" />);
        expect(asFragment()).toMatchSnapshot();
    });
});
