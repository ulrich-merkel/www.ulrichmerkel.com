import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { ModuleReadingItem } from '../item';

describe('ModuleReadingItem', function fnDescribe() {
    const props = {
        headline: 'Headline reading',
        lead: 'Lead reading',
        creator: 'Creator',
        publisher: 'Publisher'
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(<ModuleReadingItem {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
