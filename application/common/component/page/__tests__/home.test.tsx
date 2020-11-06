/* eslint-disable func-names */
import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { PageHome } from '../home';

describe('PageHome', function () {
    it('should render correctly', function () {
        const { asFragment } = render(<PageHome />);
        expect(asFragment()).toMatchSnapshot();
    });
});
