import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { ModulePersonWebsite } from '../website';

describe('ModulePersonWebsite', function fnDescribe() {
    const props = {
        content: {
            website: 'www.foobar.com'
        }
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(<ModulePersonWebsite {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should return null if content is empty', function fnIt() {
        const { asFragment } = render(
            <ModulePersonWebsite {...props} content={null} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
