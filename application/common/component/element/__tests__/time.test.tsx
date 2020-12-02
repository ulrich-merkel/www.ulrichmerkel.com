import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { Time } from '../time';

describe('Time', function fnDescribe() {
    const props = {
        className: 'test',
        htmlElement: 'time',
        itemProp: 'startDate'
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(<Time {...props}>Small Children</Time>);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly with defaults', function fnIt() {
        const { asFragment } = render(<Time>Small Children</Time>);
        expect(asFragment()).toMatchSnapshot();
    });
});
