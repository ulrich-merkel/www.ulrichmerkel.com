import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { PageContact } from '../contact';

describe('PageContact', function fnDescribe() {
    it('should render correctly', function (fnIt) {
        const { asFragment } = render(<PageContact />);
        expect(asFragment()).toMatchSnapshot();
    });
});
