import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { ModuleServiceItem } from '../item';

describe('ModuleServiceItem', function fnDescribe() {
    const props = {
        headline: 'Headline service',
        text: 'Text service',
        index: 1,
        icon: 'foo'
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(<ModuleServiceItem {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render isClear correctly', function fnIt() {
        const { asFragment } = render(<ModuleServiceItem {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
