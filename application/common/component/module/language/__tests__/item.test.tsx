import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { ModuleLanguageItem } from '../item';

describe('ModuleLanguageItem', function fnDescribe() {
    const props = {
        headline: 'Headline language',
        lead: 'Lead language',
        percent: 70
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(<ModuleLanguageItem {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
