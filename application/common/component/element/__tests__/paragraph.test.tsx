import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { P } from '../paragraph';

describe('P', function fnDescribe() {
    const props = {
        htmlElement: 'span',
        isCentered: true,
        hasColumns2: true
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(<P {...props}>P Tag Children</P>);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly with defaults', function fnIt() {
        const { asFragment } = render(<P>P Tag Children</P>);
        expect(asFragment()).toMatchSnapshot();
    });
});
