/* eslint-disable func-names */
import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { PageContact } from '../contact';

describe('PageContact', function () {
    it('should render correctly', function () {
        const { asFragment } = render(<PageContact />);
        expect(asFragment()).toMatchSnapshot();
    });
});
