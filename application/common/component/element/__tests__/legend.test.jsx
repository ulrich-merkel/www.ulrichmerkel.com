import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { Legend } from '../legend';

describe('Legend', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <Legend className="label">Legend Children</Legend>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly the hidden state', function fnIt() {
        const { asFragment } = render(
            <Legend className="label" isVisuallyHidden>
                Legend Children
            </Legend>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
