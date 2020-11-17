import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { Header } from '../header';

describe('Header', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(<Header>Headers Children</Header>);
        expect(asFragment()).toMatchSnapshot();
    });
});
