import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { Small } from '../small';

describe('Small', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <Small htmlElement="span" className="small">
                Small Children
            </Small>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
