import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { LayoutMain } from '../main';

describe('LayoutMain', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(<LayoutMain>Hello</LayoutMain>);
        expect(asFragment()).toMatchSnapshot();
    });
});
