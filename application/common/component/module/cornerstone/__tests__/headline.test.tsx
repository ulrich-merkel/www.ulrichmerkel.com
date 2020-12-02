import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { ModuleCornerstoneHeadline } from '../headline';

describe('ModuleCornerstoneHeadline', function fnDescribe() {
    const props = {
        headline: 'headline'
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(<ModuleCornerstoneHeadline {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly with defaults', function fnIt() {
        const { asFragment } = render(<ModuleCornerstoneHeadline />);
        expect(asFragment()).toMatchSnapshot();
    });
});
