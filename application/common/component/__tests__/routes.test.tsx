import * as React from 'react';
import { render } from '../../../__tests__/utils/test-utils';
import { Routes } from '../routes';

describe('Routes', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(<Routes />);
        expect(asFragment()).toMatchSnapshot();
    });
});
