import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { LayoutBody } from '../body';

describe('LayoutBody', function fnDescribe() {
    const defaultProps = {
        content: {}
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <LayoutBody {...defaultProps}>Body Children</LayoutBody>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
