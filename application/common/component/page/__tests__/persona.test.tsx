import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { PagePersona } from '../persona';

describe('PagePersona', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(<PagePersona />);
        expect(asFragment()).toMatchSnapshot();
    });
});
