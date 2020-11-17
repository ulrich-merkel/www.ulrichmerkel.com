/* eslint-disable func-names */
import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { PagePersona } from '../persona';

describe('PagePersona', function () {
    it('should render correctly', function () {
        const { asFragment } = render(<PagePersona />);
        expect(asFragment()).toMatchSnapshot();
    });
});
