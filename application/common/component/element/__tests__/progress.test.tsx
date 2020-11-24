import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { Progress } from '../progress';

describe('Progress', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <Progress id="m-progress" max="80" value="20" className="picture" />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
