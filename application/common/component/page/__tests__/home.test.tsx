import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { PageHome } from '../home';

describe('PageHome', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(<PageHome />);
        expect(asFragment()).toMatchSnapshot();
    });
});
